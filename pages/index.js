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
  const popularCatagories = getPopularCategories(locale);
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
      popularCatagories,
    },
  };
}

export default function Home({ locale, popularCatagories }) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();
  const benefits = getBenefits(t);
  const categories = popularCatagories.map((cat) => {
    return (
      <PopularCategoryCard
        key={cat.id}
        id={cat.id}
        title={cat.title}
        description={cat.description}
        type={cat.type}
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

      <section id="popular_catagories" className="">
        <h3 className="text-2xl text-bold py-3">{t("popularCatagories")}</h3>
        <div className="w-full flex flex-col items-center md:items-start">
          <div className="w-full flex flex-wrap justify-between">
            {categories}
          </div>
        </div>
      </section>

      <section id="catalog" className="">
        <h3 className="text-2xl text-bold py-3">{t("catalog")}</h3>
        <BenefitGrid benefits={benefits} />
      </section>
    </Layout>
  );
}
