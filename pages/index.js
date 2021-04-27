import Head from "next/head";
import { Layout } from "../components/organisms/Layout";
import { BenefitGrid } from "../components/organisms/BenefitGrid";
import { getBenefits } from "../lib/benefits";
import { getPopularCategories } from "../lib/categories";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { PopularCategoryCard } from "../components/molecules/PopularCategoryCard";

export async function getStaticProps(context) {
  const locale = context.locale || context.defaultLocale;
  const benefits = await getBenefits(locale);
  const popularCatagories = await getPopularCategories(locale);
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
      benefits,
      popularCatagories,
    },
  };
}

export default function Home({ locale, benefits, popularCatagories }) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();
  const categories = popularCatagories.map((cat) => {
    return (
      <PopularCategoryCard
        key={cat.id}
        id={`${cat.id}`}
        title={cat.title}
        description={cat.description}
        imgSource={cat.imgSource}
        imgAltText={cat.imgAltText}
      />
    );
  });
  return (
    <Layout locale={locale} langUrl={asPath}>
      <Head>
        <title>{t("siteTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <h1 className="text-4xl text-bold">{t("findSupport")}</h1>
      </div>

      <section id="popular_catagories">
        <div className="flex flex-wrap py-5">
          <div className="sm:grid grid-cols-3 gap-10">{categories}</div>
        </div>
      </section>

      <section id="catalog" className="">
        <h3 className="text-2xl text-bold py-3">{t("catalog")}</h3>
        <BenefitGrid benefits={benefits} />
      </section>
    </Layout>
  );
}
