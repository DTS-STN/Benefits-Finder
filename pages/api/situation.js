import cookie from "cookie";

export default async (req, res) => {
  // update the user situation cookie
  if (req.method === "POST") {
    console.log(req.body.situation);
    let situation = req.body.situation || {};

    if (
      req.cookies.situation === undefined &&
      req.connection.remoteAddress != "127.0.0.1"
    ) {
      //check if the request requirements are valid to get the location
      let rawLocation;
      try {
        const apiResponse = await fetch(
          process.env.IP_LOCATION_API_URL +
            "?ip=" +
            req.connection.remoteAddress //use the secret api call to get the user location
        );
        rawLocation = await apiResponse.json();
      } catch (e) {
        rawLocation = {}; //default value so no errors happen
      }
      let location =
        rawLocation?.country_code3 === "CAN" ? rawLocation.state_prov : ""; //if in canada, return the prov, otherwise return an empty string,
      situation = { location: location };
    }

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("situation", JSON.stringify(situation), {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60,
        sameSite: "strict",
        path: "/",
      })
    );
  }

  res.status(200).json({ success: true });
};
