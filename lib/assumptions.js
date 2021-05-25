import { getUserIP } from "./ip";

export async function getUserLocationAssumption() {
  let rawLocation;
  try {
    //get ip and then send a request to the assumptions api using said ip to get the user location information
    const ip = await getUserIP();
    const res = await fetch("/api/assumptions", {
      method: "GET",
      headers: {
        "Assumption-Type": "location",
        "IP-Address": ip,
      },
    });
    rawLocation = await res.json();
  } catch (e) {
    rawLocation = "";
  }
  return rawLocation?.country_code3 === "CAN" ? rawLocation.state_prov : ""; //if in canada, return the prov, otherwise return an empty string,
}
