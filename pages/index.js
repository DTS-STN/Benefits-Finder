import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <Head>
        <title>Benefit Finder 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center text-4xl uppercase text-bold py-3">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="text-center text-4xl uppercase text-bold py-3">
          Get started by editing{" "}
          <code className="text-center text-4xl uppercase text-bold py-3">
            pages/index.js
          </code>
        </p>
      </main>

      <footer className="text-center text-4xl uppercase text-bold py-3">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  );
}
