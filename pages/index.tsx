import Head from "next/head";
import Link from "next/link";
import pkg from "../package.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>⚡PULZ⚡</title>
        <meta
          name="description"
          content="PULZ - An Open Source Gaming Platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-screen flex flex-col items-center justify-center transition-all duration-500 select-none">
          <span className="text-9xl">PULZ</span>
          <span className="text-2xl text-center">
            Open Source Gaming Platform
          </span>
          <Link
            href={"/login"}
            className="mt-4 nav-btn min-w-fit text-xl font-bold font-mono"
          >
            LOGIN NOW TO PLAY
          </Link>
          <span className="text-lg font-extralight mt-1">
            beta v{pkg.version}
          </span>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
