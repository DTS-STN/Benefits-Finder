import { appWithTranslation } from "next-i18next";
import { CookiesProvider } from "react-cookie";
import "../styles/globals.css";
import "../icomoon/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  );
}

export default appWithTranslation(MyApp);
