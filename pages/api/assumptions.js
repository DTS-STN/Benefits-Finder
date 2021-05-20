export default async (req, res) => {
  let rawLocation;
  const ip = req.headers["ip-address"];
  console.log("before if");
  if (req.method === "GET" && req.headers["assumption-type"] == "location") {
    try {
      console.log("in try bloc, ip = " + ip);
      const apiResponse = await fetch(
        process.env.IP_LOCATION_API_URL + "?ip=" + ip
      );
      rawLocation = await apiResponse.json();
      console.log(rawLocation);
    } catch (e) {
      rawLocation = ""; //default value
    }
    res.status(200).json(rawLocation);
  }
  console.log("after if");
};
