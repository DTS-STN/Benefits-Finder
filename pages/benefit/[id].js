import Head from "next/head";
import { Layout } from "../../components/organisms/Layout";
import { Benefit } from "../../components/organisms/Benefit.js";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

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
  const { asPath } = useRouter();
  return (
    <Layout
      locale={locale}
      langUrl={asPath}
      siteTitle={benefitData.title}
      headline={benefitData.type}
    >
      <Head>
        <title>{benefitData.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <h1>{benefitData.title}</h1>
        <Benefit
          type={benefitData.type}
          outcomes={benefitData.outcomes}
          provider={benefitData.provider}
        />
      </div>
    </Layout>
  );
}
