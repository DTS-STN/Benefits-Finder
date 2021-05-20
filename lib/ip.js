export async function getUserIP() {
  let ip;
  try {
    const ipJSON = await fetch("https://api.ipgeolocation.io/getip").catch(
      "{}"
    );
    ip = await ipJSON.json().catch("");
  } catch {
    ip = "";
  }
  return ip.ip;
}
