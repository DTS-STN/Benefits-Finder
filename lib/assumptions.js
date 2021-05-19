//will change the location value in the selector to be whatever the geolocation API returns
//also returns the canadian province or "Other" the api acquires
export async function getUserLocationAssumption() {
  let res, rawLocation;
  try {
    res = await fetch(process.env.IP_LOCATION_API_URL);
    rawLocation = await res.json();
    console.log("after json interpretation");
  } catch (e) {
    rawLocation = ""; //default value
  }
  return rawLocation?.country_code3 === "CAN" ? rawLocation.state_prov : "";
}
