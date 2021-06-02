import Head from "next/head";
import { Layout } from "../components/organisms/Layout";
import { getBundles } from "../lib/bundles";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { PopularCategoryCard } from "../components/molecules/PopularCategoryCard";
import { BenefitCard } from "../components/molecules/BenefitCard";
import { CardGrid } from "../components/organisms/CardGrid";
import { CriteriaGrid } from "../components/organisms/CriteriaGrid";
import { SelectPicker } from "../components/atoms/SelectPicker";
import { NumInput } from "../components/atoms/NumInput";
import { useState, useEffect } from "react";
import { Drawer } from "../components/organisms/Drawer";
import { DrawerItem } from "../components/atoms/DrawerItem";

export async function getServerSideProps(context) {
  const locale = context.locale || context.defaultLocale;

  const lifeBundles = await getBundles(locale);

  const situation = JSON.parse(context.req.cookies?.situation ?? "{}");

  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
      lifeBundles,
      situationCookie: situation,
    },
  };
}

export default function Home({ locale, lifeBundles, situationCookie }) {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();

  const [bundles, setBundles] = useState([]);

  const [situation, setSituation] = useState({
    location: situationCookie.location,
    age: situationCookie.age,
    income: situationCookie.income,
  });
  const [benefits, setBenefits] = useState([]);

  const [filterOpen, setFilterOpen] = useState(false);

  const clickBundle = (id) => {
    if (!bundles.includes(id)) {
      setBundles((previousState) => [...previousState, id]);
    } else {
      setBundles((previousState) => {
        return previousState.filter((i) => i !== id);
      });
    }
  };

  const clearBundles = () => {
    setBundles([]);
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
    let filteredData = [];
    // if bundles have been selected
    if (bundles.length > 0) {
      // iterate through all our benefits
      for (let i = 0; i < data.length; i++) {
        const benefit = data[i].benefit;
        // if the benefit is part of a bundle
        if (benefit.bundles && benefit.bundles.length > 0) {
          // iterate over the bundles related to the benefit
          for (let j = 0; j < benefit.bundles.length; j++) {
            // if the benefits are included in the list of selected bundles
            if (bundles.includes(benefit.bundles[j].toString())) {
              // check to see if this benefit has aleady been pushed into the filtered data
              if (
                filteredData
                  .map((fd) => {
                    return fd.benefit.id;
                  })
                  .indexOf(benefit.id) < 0
              ) {
                // if it hasn't, add it to the list
                filteredData.push({ benefit: benefit });
              }
            }
          }
        }
      }
    }
    setBenefits(filteredData.length > 0 ? filteredData : data);
  }, [situation, bundles]);

  return (
    <Layout locale={locale} langUrl={asPath} noScroll={filterOpen}>
      <Head>
        <title>{t("siteTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl text-bold layout-container py-6">
        {t("findSupport")}
      </h1>
      <div className="lg:flex layout-container">
        {/*Filter section*/}

        <Drawer
          isOpen={filterOpen}
          onClick={() => setFilterOpen(!filterOpen)}
          clearSituation={clearSituation}
        >
          {/* your situation section */}
          <h2 className="mb-7">{t("eligibilityCriteria")}</h2>
          <DrawerItem summary={t("location.title")}>
            <SelectPicker
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
          </DrawerItem>
          <DrawerItem summary={t("age.title")}>
            <NumInput
              id="age"
              name="age"
              placeholder={t("age.placeholder")}
              defaultValue={situation.age}
              onChange={handleSituationChange}
            ></NumInput>
          </DrawerItem>
          <DrawerItem summary={t("income.title")}>
            <SelectPicker
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
          </DrawerItem>
        </Drawer>

        <div className="lg:w-3/4">
          {/*rest of page (content section)*/}

          <section id="life_bundles" className="layout-container py-6">
            <h2 className="text-2xl text-bold py-3">{t("lifeBundles")}</h2>
            <CardGrid>
              {/* TODO: Replace PopularCategoryCard component with a bundle component */}
              {lifeBundles.map((bundle) => {
                return (
                  <PopularCategoryCard
                    key={bundle.id}
                    id={`${bundle.id}`}
                    title={bundle.title}
                    description={bundle.description}
                    imgSource={bundle.imgSource}
                    imgAltText={bundle.imgAltText}
                    onClick={clickBundle}
                    selected={bundles.includes(bundle.id.toString())}
                  />
                );
              })}
            </CardGrid>
            {/* Clear bundles */}
            <button
              type="button"
              onClick={clearBundles}
              className={
                "hover:bg-red-700 hover:text-white mt-2 py-2 px-4 border rounded"
              }
            >
              <span className={"icon-cross pr-2"} />
              {t("clearBundles")}
            </button>
          </section>
          {/* benefit card section start */}
          <section id="catalog" className="layout-container py-6">
            <h3 className="text-2xl text-bold py-3">{t("catalog")}</h3>

            <CriteriaGrid>
              {benefits.map((benefitData) => {
                const benefit = benefitData.benefit;
                return (
                  <BenefitCard
                    key={benefit.id}
                    id={`${benefit.id}`}
                    title={benefit.title}
                    description={benefit.description}
                    eligibilityCriteria={benefit.eligibilityCriteria}
                    applyLink={benefit.applyLink}
                    type={benefit.type}
                    program={benefit.program}
                    bundles={benefit.bundles}
                    eligibility={benefitData.eligibility === 0 ? false : true}
                  />
                );
              })}
            </CriteriaGrid>
          </section>
          {/* benefit card section end */}
        </div>
      </div>
    </Layout>
  );
}
