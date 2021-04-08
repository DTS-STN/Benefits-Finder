import Head from "next/head";
import { useRouter } from "next/router";
import { Banner } from "../../components/atoms/Banner";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="mx-auto">
      <Head>
        <title>{id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto">
        <Banner siteTitle={id}></Banner>
      </main>

      <footer>Footer</footer>
    </div>
  );
}
