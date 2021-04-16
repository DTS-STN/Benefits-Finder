import Head from "next/head";
import { Banner } from "../../components/atoms/Banner";
import { LanguageToggle } from "../../components/atoms/LanguageToggle";
import { Benefit } from "../../components/organisms/Benefit.js";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//TODO: replace lib/benefits with proper source of data
import { getBenefitData, getBenefitIds } from "../../lib/benefits";

//TODO: get benefitData from better source
export async function getStaticProps(context) {
  const locale = context.locale || context.defaultLocale;
  const benefitData = await getBenefitData(context.params.id, locale);
  return {
    props: {
      benefitData,
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

//TODO: get paths data from better source
export async function getStaticPaths() {
  //There is probably a better way to create all the paths needed
  const benefitIds = await getBenefitIds();
  const pathsEn = benefitIds.map((x) => {
    return { params: { id: x }, locale: "en" };
  });
  const pathsFr = benefitIds.map((x) => {
    return { params: { id: x }, locale: "fr" };
  });
  const paths = pathsEn.concat(pathsFr);

  return {
    paths,
    fallback: false,
  };
}

export default function BenefitPage({ benefitData, locale }) {
  const { t } = useTranslation("common");
  return (
    <div className="mx-auto">
      <Head>
        <title>{benefitData.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LanguageToggle
        lang={locale}
        languageToggleText={t("toggleLanguageText")}
        queryValues={benefitData.id}
      />
      <main className="mx-auto">
        <Banner
          siteTitle={benefitData.title}
          headline={benefitData.type}
        ></Banner>
        <Benefit
          type={benefitData.type}
          outcomes={benefitData.outcomes}
          provider={benefitData.provider}
        ></Benefit>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
