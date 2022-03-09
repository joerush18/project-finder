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
        <Header isSearch={false} />
        <div className="flex justify-center items-baseline mt-6">
          <h1 className="text-sm text-pink-500 cursor-pointer font-bold">
            “The secret of getting ahead is getting started”
          </h1>
          <p className="text-[12px] font-Montserrat font-bold">- Mark Twain</p>
        </div>
        {/* logo */}
        <div className="flex justify-center">
          <Image src="/images/logosecondary.png" height={105} width={434} />
        </div>
        {/* Searching places */}
        <div className="w-[500px] m-auto">
          <SearchBox valueText="" />
        </div>

        <div className=" mt-8">
          <Footer />
        </div>
      </main>
    </>
  );
}
