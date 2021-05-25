export async function getUserIP() {
  let ip;
  try {
    const ipJSON = await fetch("https://api.ipgeolocation.io/getip").catch({
      ip: "",
    });
    ip = await ipJSON.json().catch({ ip: "" });
  } catch {
    ip = { ip: "" };
  }
  return ip?.ip === undefined ? "" : ip.ip;
}
