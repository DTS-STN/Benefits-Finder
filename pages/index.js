import Head from "next/head";
import { Layout } from "../components/organisms/Layout";
import { BenefitGrid } from "../components/organisms/BenefitGrid";
import { getBenefits } from "../lib/benefits";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

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
  const { asPath } = useRouter();
  const benefits = getBenefits(t);
  return (
    <Layout locale={locale} langUrl={asPath}>
      <Head>
        <title>{t("siteTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <h1 className="text-4xl text-bold">{t("findSupport")}</h1>
      </div>

      <section className="">
        <h3 className="text-2xl text-bold py-3">{t("popularCatagories")}</h3>
        <p>{t("underConstruction")}</p>
      </section>

      <section className="">
        <h3 className="text-2xl text-bold py-3">{t("catalog")}</h3>
        <BenefitGrid benefits={benefits} />
      </section>
    </Layout>
  );
}
