import { getUserLocationAssumption } from "./assumptions";

describe("API call handler to get client's general location (returns province)", () => {
  jest.mock("./ip");
  const ip = require("./ip");

  //mocks and overrides fetch + getUserIP functions
  global.fetch = jest.fn();
  ip.getUserIP = jest.fn(() => {
    return "1.1.1.1"; //return dummy IP address so no external API call is attempted
  });

  it("getUserLocationAssumption will return Ontario", async () => {
    //Mocks geolocation api fetch inside of getUserLocationAssumption function
    //given how fetch requests and json decoding are handled, a double promise like below lets you directly return expected objects
    fetch.mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            country_code3: "CAN",
            state_prov: "Ontario",
          }),
      })
    );
    const userLocation = await getUserLocationAssumption();
    expect(userLocation).toBe("Ontario");
  });

  it("getUserLocationAssumption will return empty string if country code isn't 'CAN' ", async () => {
    //Same as above
    fetch.mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            country_code3: "USA",
            state_prov: "North Carolina",
          }),
      })
    );
    const userLocation = await getUserLocationAssumption();
    expect(userLocation).toBe("");
  });
});
