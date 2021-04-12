import Head from "next/head";
import { Banner } from "../../components/atoms/Banner";
import { LanguageToggle } from "../../components/atoms/LanguageToggle";
import { Benefit } from "../../components/organisms/Benefit.js";
import { useI18n } from "next-rosetta";

//TODO: replace lib/benefits with proper source of data
import { getBenefitData, getBenefitIds } from "../../lib/benefits";

//TODO: get benefitData from better source
export async function getStaticProps(context) {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../../i18n/${locale}`);
  const benefitId = context.params.id;
  return {
    props: {
      benefitId,
      table,
      locale,
    },
  };
}

//TODO: get paths data from better source
export async function getStaticPaths() {
  //There is probably a better way to create all the paths needed
  const benefitIds = getBenefitIds();
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

export default function BenefitPage({ benefitId, locale }) {
  const { t } = useI18n();
  const benefitData = getBenefitData(benefitId, t);
  return (
    <div className="mx-auto">
      <Head>
        <title>{benefitData.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LanguageToggle
        lang={locale}
        languageToggleText={t("toggleLanguageText")}
        queryValues={benefitId}
      />
      <main className="mx-auto">
        <Banner
          siteTitle={benefitData.name}
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
