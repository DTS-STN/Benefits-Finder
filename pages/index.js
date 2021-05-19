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

  const popularCategories = await getPopularCategories(locale);

  const situation = JSON.parse(context.req.cookies?.situation ?? "{}");

  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
      popularCategories,
      situationCookie: situation,
    },
  };
}

export default function Home({ locale, popularCategories, situationCookie }) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();

  const [categories, setCategories] = useState([]);

  const [situation, setSituation] = useState({
    location: situationCookie.location,
    age: situationCookie.age,
    income: situationCookie.income,
  });
  const [benefits, setBenefits] = useState([]);

  const clickPopularCategory = (id) => {
    if (!categories.includes(id)) {
      setCategories((previousState) => [...previousState, id]);
    }
  };

  const clearCategories = () => {
    setCategories([]);
  };

  const handleSituationChange = (e) => {
    const { name, value } = e.target;
    setSituation((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const clearSituation = () => {
    setSituation({});
    document.getElementById("location-select").value = "";
    document.getElementById("age").value = "";
    document.getElementById("income-select").value = "";
  };

  useEffect(async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/situation`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ situation }),
    });

    const response = await fetch("/api/benefits", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": locale,
      },
    });

    const data = await response.json();
    setBenefits(data);
  }, [situation]);

  return (
    <Layout locale={locale} langUrl={asPath}>
      <Head>
        <title>{t("siteTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <h1 className="text-4xl text-bold">{t("findSupport")}</h1>
      </div>

      <section id="popular_categories">
        <h2 className="text-2xl text-bold py-3">{t("popularCategories")}</h2>
        <CardGrid>
          {popularCategories.map((cat) => {
            return (
              <PopularCategoryCard
                key={cat.id}
                id={`${cat.id}`}
                title={cat.title}
                description={cat.description}
                imgSource={cat.imgSource}
                imgAltText={cat.imgAltText}
                onClick={clickPopularCategory}
                selected={categories.includes(cat.id.toString())}
              />
            );
          })}
        </CardGrid>
        {/* Clear categories */}
        <button
          type="button"
          onClick={clearCategories}
          className={
            "hover:bg-red-700 hover:text-white mt-2 py-2 px-4 border rounded"
          }
        >
          <span className={"icon-cross pr-2"} />
          {t("clearCategories")}
        </button>
      </section>
      <details>
        <summary>Location</summary>
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
      </details>
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
        {/* Clear my situation */}
        <button
          type="button"
          onClick={clearSituation}
          className={
            "hover:bg-red-700 hover:text-white mt-2 py-2 px-4 border rounded"
          }
        >
          <span className={"icon-cross pr-2"} />
          {t("clearSituation")}
        </button>
      </section>

      <section id="catalog" className="">
        <h3 className="text-2xl text-bold py-3">{t("catalog")}</h3>
        <CardGrid>
          {benefits.map((benefitData) => {
            const benefit = benefitData.benefit;
            return (
              <BenefitCard
                key={benefit.id}
                id={`${benefit.id}`}
                title={benefit.title}
                description={benefit.description}
                applyLink={benefit.applyLink}
                type={benefit.type}
                program={benefit.program}
                collections={benefit.collections}
                eligibility={benefitData.eligibility === 0 ? false : true}
              />
            );
          })}
        </CardGrid>
      </section>
    </Layout>
  );
}
