import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import SearchBox from "../components/Searchbox";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Project finder</title>
      </Head>
      <main>
        {/* Heaader */}
        <Header isSearch={false} valueText={""} />
        {/* logo */}
        <div className="flex justify-center mt-8">
          <Image src={"/images/logosecondary.png"} height={105} width={434} />
        </div>
        {/* Searching places */}
        <div className="w-[500px] m-auto">
          <SearchBox valueText="" />
        </div>
        <div className="mt-20">
          <Footer />
        </div>
      </main>
    </>
  );
}
