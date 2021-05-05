import Head from "next/head";
import { Layout } from "../components/organisms/Layout";
import { getPopularCategories } from "../lib/categories";
import { getBenefits } from "../lib/benefits";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { PopularCategoryCard } from "../components/molecules/PopularCategoryCard";
import { BenefitCard } from "../components/molecules/BenefitCard";
import { CardGrid } from "../components/organisms/CardGrid";
import { CriteriaGrid } from "../components/organisms/CriteriaGrid";
import { CriteriaBox } from "../components/atoms/CriteriaBox";
import { SelectPicker } from "../components/atoms/SelectPicker";
import { NumInput } from "../components/atoms/NumInput";

export async function getServerSideProps(context) {
  const locale = context.locale || context.defaultLocale;

  const benefits = await getBenefits(locale);
  const popularCatagories = await getPopularCategories(locale);

  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
      benefits,
      popularCatagories,
      situation: context.req.cookies.situation || "",
    },
  };
}

export default function Home({
  locale,
  benefits,
  popularCatagories,
  situation,
}) {
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
  const benefitCards = benefits.map((benefitData) => {
    return (
      <BenefitCard
        key={benefitData.id}
        id={`${benefitData.id}`}
        title={benefitData.title}
        description={benefitData.description}
        applyLink={benefitData.applyLink}
        type={benefitData.type}
        program={benefitData.program}
        collections={benefitData.collections}
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
        <h2 className="text-2xl text-bold py-3">{t("popularCatagories")}</h2>
        <CardGrid>{categories}</CardGrid>
      </section>

      {/* your situation section */}
      <section id="eligibility_criteria" className="">
        <h3 className="text-2xl text-bold py-3">{t("eligibilityCriteria")}</h3>
        <CriteriaGrid>
          {/* location picker */}
          <CriteriaBox>
            <SelectPicker
              criteriaTitle={t("location.title")}
              id="location-select"
              ariaLabel="location-select"
              name="location"
              dataCy="location-select-picker"
              selects={[
                {
                  criteriaSelect: t("location.on"),
                },
                {
                  criteriaSelect: t("location.ab"),
                },
                {
                  criteriaSelect: t("location.mb"),
                },
                {
                  criteriaSelect: t("location.nb"),
                },
                {
                  criteriaSelect: t("location.nl"),
                },
                {
                  criteriaSelect: t("location.ns"),
                },
                {
                  criteriaSelect: t("location.nu"),
                },
                {
                  criteriaSelect: t("location.pe"),
                },
                {
                  criteriaSelect: t("location.sk"),
                },
                {
                  criteriaSelect: t("location.bc"),
                },
                {
                  criteriaSelect: t("location.yt"),
                },
              ]}
            ></SelectPicker>
          </CriteriaBox>

          {/* age input box */}
          <CriteriaBox>
            <NumInput
              criteriaTitle={t("age.title")}
              placeholder={t("age.placeholder")}
            ></NumInput>
          </CriteriaBox>

          {/* income picker */}
          <CriteriaBox>
            <SelectPicker
              criteriaTitle={t("income.title")}
              id="income-select"
              name="income"
              ariaLabel="income-select"
              dataCy="income-select-picker"
              selects={[
                {
                  criteriaSelect: t("income.option-1"),
                },
                {
                  criteriaSelect: t("income.option-2"),
                },
                {
                  criteriaSelect: t("income.option-3"),
                },
              ]}
            ></SelectPicker>
          </CriteriaBox>
        </CriteriaGrid>
      </section>

      <section id="catalog" className="">
        <h3 className="text-2xl text-bold py-3">{t("catalog")}</h3>
        <CardGrid>{benefitCards}</CardGrid>
      </section>
    </Layout>
  );
}
