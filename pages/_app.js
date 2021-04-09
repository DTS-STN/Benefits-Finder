import { I18nProvider } from "next-rosetta";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <I18nProvider table={pageProps.table}>
      <Component {...pageProps} />
    </I18nProvider>
  );
}

export default MyApp;
