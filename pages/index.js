import Head from "next/head";
import { BenefitGrid } from "../components/organisms/BenefitGrid";
import { LanguageToggle } from "../components/atoms/LanguageToggle";
import { getBenefits } from "../lib/benefits";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps(context) {
  const locale = context.locale || context.defaultLocale;
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home({ locale }) {
  const { t } = useTranslation("common");
  const benefits = getBenefits(t);
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <Head>
        <title>{t("siteTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LanguageToggle
        lang={locale}
        languageToggleText={t("toggleLanguageText")}
      />
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
