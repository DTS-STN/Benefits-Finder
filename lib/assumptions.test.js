import { getUserLocationAssumption } from "./assumptions";

jest.mock("./ip");
const ip = require("./ip");

global.fetch = jest.fn();
ip.getUserIP = jest.fn(() => {
  return "1.1.1.1";
});

it("getUserLocationAssumption will return Ontario", async () => {
  //Mocks ip address api fetch
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          ip: "1.1.1.1",
          country_code3: "CAN",
          state_prov: "Ontario",
        }),
    })
  );

  const userLocation = await getUserLocationAssumption();
  expect(userLocation).toBe("Ontario");
});

it("getUserLocationAssumption will return empty string if country code isn't 'CAN' ", async () => {
  //Mocks ip address api fetch, then geolocation api fetch (ip is irrelevant here)
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({ country_code3: "USA", state_prov: "North Carolina" }),
    })
  );
  const userLocation = await getUserLocationAssumption();
  expect(userLocation).toBe("");
});
