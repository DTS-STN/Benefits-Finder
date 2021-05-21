export default async (req, res) => {
  let rawLocation;
  const ip = req.headers["ip-address"];
  //check if the request requirements are valid to get the location
  if (req.method === "GET" && req.headers["assumption-type"] == "location") {
    try {
      const apiResponse = await fetch(
        process.env.IP_LOCATION_API_URL + "?ip=" + ip //use the secret api call to get the user location
      );
      rawLocation = await apiResponse.json();
    } catch (e) {
      rawLocation = {}; //default value so no errors happen
    }
    res.status(200).json(rawLocation);
  }
};
