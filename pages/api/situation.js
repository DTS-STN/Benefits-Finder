import cookie from "cookie";

export default (req, res) => {
  const existingSituation = JSON.parse(req.cookies?.situation ?? "{}");

  // update the user situation cookie
  if (req.method === "POST") {
    const updatedSituation = req.body.situation || {};
    const situation = {
      location: updatedSituation.location
        ? updatedSituation.location
        : existingSituation.location ?? "",
      age: updatedSituation.age || (existingSituation.age ?? ""),
      income: updatedSituation.income || (existingSituation.income ?? ""),
    };

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

  if (req.method === "DELETE") {
    // set the user situation cookie to expire
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("situation", req.body.situation, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        expires: new Date(0),
        sameSite: "strict",
        path: "/",
      })
    );
  }

  res.status(200).json({ success: true });
};
