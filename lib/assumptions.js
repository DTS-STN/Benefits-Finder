import { getUserIP } from "./ip";

export async function getUserLocationAssumption() {
  let rawLocation;
  try {
    const ip = await getUserIP();
    console.log("IP Address (lib/assumptions): " + ip);
    const res = await fetch("/api/assumptions", {
      method: "GET",
      headers: {
        "Assumption-Type": "location",
        "IP-Address": ip,
      },
    });
    console.log("Server Response (lib/assumptions): ");
    console.log(res);
    rawLocation = await res.json();
  } catch (e) {
    rawLocation = "";
  }
  console.log("Location: ");
  console.log(rawLocation);
  return rawLocation?.country_code3 === "CAN" ? rawLocation.state_prov : "";
}

// //will change the location value in the selector to be whatever the geolocation API returns
// //also returns the canadian province or "Other" the api acquires
// export async function getUserLocationAssumption() {
//   let res, rawLocation;
//   try {
//     res = await fetch(process.env.NEXT_PUBLIC_IP_LOCATION_API_URL);

//   console.log("IP_LOCATION_API_URL: " + process.env.NEXT_PUBLIC_IP_LOCATION_API_URL)
//   console.log("NEXT_PUBLIC_BASE_URL: " + process.env.NEXT_PUBLIC_BASE_URL)
//     rawLocation = await res.json();
//     console.log("after json interpretation");
//   } catch (e) {
//     rawLocation = ""; //default value
//   }
//   return rawLocation?.country_code3 === "CAN" ? rawLocation.state_prov : "";
// }
