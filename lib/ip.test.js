import { getUserIP } from "./ip";

const ip = "255.255.255.255";
global.fetch = jest.fn();

it('ip address should default to be "" if api returns empty object', async () => {
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    })
  );
  const userIP = await getUserIP();
  expect(userIP).toBe("");
});

it('ip address should default to be "" if api returns wrong object', async () => {
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({ random: "Not an IP address" }),
    })
  );
  const userIP = await getUserIP();
  expect(userIP).toBe("");
});

it('ip address should default to be "" if api call throws error', async () => {
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.reject(),
    })
  );
  const userIP = await getUserIP();
  expect(userIP).toBe("");
});

it("ip address is returned properly i.e. returns address in string form", async () => {
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({ ip: ip }),
    })
  );
  const userIP = await getUserIP();
  expect(userIP).toBe(ip);
});
