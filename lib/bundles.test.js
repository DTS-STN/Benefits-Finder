import fetchMock from "fetch-mock";
import { getBundles } from "./bundles";

describe("bundles helper functions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("fetches bundles", async () => {
    fetchMock.getOnce("http://localhost:1337/bundles", {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: mockBundles,
    });

    const data = await getBundles("en");
    expect(data.length).toEqual(3);
    expect(data[0].title).toEqual("Retirement Planning");
    expect(data[1].title).toEqual("Family Support / Family Zone");
    expect(data[2].title).toEqual("New Parent / Having a Baby");
  });

  it("returns data in English", async () => {
    fetchMock.getOnce("http://localhost:1337/bundles", {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: mockBundles,
    });

    const data = await getBundles("en");
    expect(data[0]).toEqual({
      id: 1,
      slug: "retirement-planning",
      title: "Retirement Planning",
      description: "Retirement Planning description",
      imgAltText: "a test image",
      imgSource: "",
    });
  });

  it("returns data in French", async () => {
    fetchMock.getOnce("http://localhost:1337/bundles", {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: mockBundles,
    });

    const data = await getBundles("fr");
    expect(data[0]).toEqual({
      id: 1,
      slug: "retirement-planning",
      title: "(FR) Retirement Planning",
      description: "(FR) Retirement Planning description",
      imgAltText: "(FR) a test image",
      imgSource: "",
    });
  });
});

const mockBundles = [
  {
    id: 1,
    slug: "retirement-planning",
    Title_EN: "Retirement Planning",
    Title_FR: "(FR) Retirement Planning",
    Description_EN: "Retirement Planning description",
    Description_FR: "(FR) Retirement Planning description",
    ImageAltText_EN: "a test image",
    ImageAltText_FR: "(FR) a test image",
    Image: "",
  },
  {
    id: 2,
    slug: "family-support",
    Title_EN: "Family Support / Family Zone",
    Title_FR: "(FR) Family Support / Family Zone",
    Description_EN: "Family Support / Family Zone description",
    Description_FR: "(FR) Family Support / Family Zone description",
    ImageAltText_EN: "a test image",
    ImageAltText_FR: "(FR) a test image",
    Image: "",
  },
  {
    id: 3,
    slug: "new-parent",
    Title_EN: "New Parent / Having a Baby",
    Title_FR: "(FR) New Parent / Having a Baby",
    Description_EN: "New Parent / Having a Baby description",
    Description_FR: "(FR) New Parent / Having a Baby description",
    ImageAltText_EN: "a test image",
    ImageAltText_FR: "(FR) a test image",
    Image: "",
  },
];
