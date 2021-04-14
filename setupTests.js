import "@testing-library/jest-dom/extend-expect";
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// need to mock next/link because it throws an error when using the real one
// and I don't really know why
jest.mock("next/link", () => {
  return ({ children }) => {
    return children;
  };
});

// Mock react-i18next
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  resources: {
    en: {
      common: {}
    }
  }
}) 