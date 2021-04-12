import "@testing-library/jest-dom/extend-expect";

// need to mock next/link because it throws an error when using the real one
// and I don't really know why
jest.mock("next/link", () => {
  return ({ children }) => {
    return children;
  };
});
