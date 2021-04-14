import Head from "next/head";
import { Header } from "../components/molecules/Header";
import { BenefitGrid } from "../components/organisms/BenefitGrid";
import { getBenefits } from "../lib/benefits";

export async function getStaticProps({ params }) {
  const benefits = getBenefits();
  return {
    props: {
      benefits,
    },
  };
}

export default function Home({ benefits }) {
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <Head>
        <title>Benefit Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1 className="text-center text-4xl text-bold py-3">
          Let's help you find support ...
        </h1>

        <section className="text-center py-4">
          <h3 className="text-2xl text-bold py-3">Popular catagories</h3>
          <p>🔧 Under construction 🔧</p>
        </section>

        <section className="text-center py-4">
          <h3 className="text-2xl text-bold py-3">Catalog</h3>
          <BenefitGrid benefits={benefits} />
        </section>
      </main>

      <footer className="text-center text-bold py-3"></footer>
    </div>
  );
}
