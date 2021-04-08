import Head from "next/head";
import { Banner } from "../../components/atoms/Banner";
import { Benefit } from "../../components/organisms/Benefit.js";

//TODO: replace lib/benefits with proper source of data
import { getBenefitData, getBenefitIds } from "../../lib/benefits";

//TODO: get benefitData from better source
export async function getStaticProps({ params }) {
  const benefitData = getBenefitData(params.id);
  return {
    props: {
      benefitData,
    },
  };
}

//TODO: get paths data from better source
export async function getStaticPaths() {
  const paths = getBenefitIds();
  return {
    paths,
    fallback: false,
  };
}

export default function BenefitPage({ benefitData }) {
  return (
    <div className="mx-auto">
      <Head>
        <title>{benefitData.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto">
        <Banner siteTitle={benefitData.name}></Banner>
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
