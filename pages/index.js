import Head from "next/head";
import { BenefitGrid } from "../components/organisms/BenefitGrid";
import { getBenefits } from "../lib/benefits";
import { useI18n } from "next-rosetta";

export async function getStaticProps(context) {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../i18n/${locale}`);
  return {
    props: {
      table,
    },
  };
}

export default function Home() {
  const { t } = useI18n();
  const benefits = getBenefits(t);
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <Head>
        <title>{t("siteTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center text-4xl text-bold py-3">
          {t("findSupport")}
        </h1>

        <section className="text-center py-4">
          <h3 className="text-2xl text-bold py-3">{t("popularCatagories")}</h3>
          <p>{t("underConstruction")}</p>
        </section>

        <section className="text-center py-4">
          <h3 className="text-2xl text-bold py-3">{t("catalog")}</h3>
          <BenefitGrid benefits={benefits} />
        </section>
      </main>

      <footer className="text-center text-bold py-3"></footer>
    </div>
  );
}
