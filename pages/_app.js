import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import "../icomoon/style.css";
import "../styles/drawerItem.css";
import "../styles/drawer.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
