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
import { useState, useEffect } from "react";

export async function getServerSideProps(context) {
  const locale = context.locale || context.defaultLocale;

  const benefits = await getBenefits(locale);
  const popularCatagories = await getPopularCategories(locale);

  const situation = JSON.parse(context.req.cookies?.situation ?? "{}");

  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
      benefits,
      popularCatagories,
      situationCookie: situation,
    },
  };
}

export default function Home({
  locale,
  benefits,
  popularCatagories,
  situationCookie,
}) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();

  const [situation, setSituation] = useState({
    location: situationCookie.location,
    age: situationCookie.age,
    income: situationCookie.income,
  });

  const handleSituationChange = (e) => {
    const { name, value } = e.target;
    setSituation((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/situation`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ situation }),
    });
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
        <CardGrid>
          {popularCatagories.map((cat) => {
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
          })}
        </CardGrid>
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
              defaultValue={situation.location}
              onChange={handleSituationChange}
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
              id="age"
              name="age"
              criteriaTitle={t("age.title")}
              placeholder={t("age.placeholder")}
              defaultValue={situation.age}
              onChange={handleSituationChange}
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
              defaultValue={situation.income}
              onChange={handleSituationChange}
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
        <CardGrid>
          {benefits.map((benefitData) => {
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
          })}
        </CardGrid>
      </section>
    </Layout>
  );
}
