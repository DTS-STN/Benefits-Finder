import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { Banner } from "../../components/atoms/Banner";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={styles.container}>
      <Head>
        <title>{id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner siteTitle={id}></Banner>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
