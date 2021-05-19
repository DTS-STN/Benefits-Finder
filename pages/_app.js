import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import "../icomoon/style.css";
import "../styles/situation.css";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
