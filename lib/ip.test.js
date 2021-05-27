import { getUserIP } from "./ip";

describe("Gets client IP address using external API", () => {
  const ip = "255.255.255.255";
  global.fetch = jest.fn(); //overrides the global fetch function for mocking

  it('ip address should default to be "" if api returns empty object', async () => {
    //returns an empty object, after the request is processed and the json decoded
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );
    const userIP = await getUserIP();
    expect(userIP).toBe("");
  });

  it('ip address should default to be "" if api returns wrong object', async () => {
    //returns object with unexpected values
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ random: "Not an IP address" }),
      })
    );
    const userIP = await getUserIP();
    expect(userIP).toBe("");
  });

  it('ip address should default to be "" if api call throws error', async () => {
    //returns a rejected promise i.e. error
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.reject(),
      })
    );
    const userIP = await getUserIP();
    expect(userIP).toBe("");
  });

  it("ip address is returned properly i.e. returns address in string form", async () => {
    //returns IP address as defined by the constant above
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ ip: ip }),
      })
    );
    const userIP = await getUserIP();
    expect(userIP).toBe(ip);
  });
});
