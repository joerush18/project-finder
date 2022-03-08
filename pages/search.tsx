import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const { query } = router.query;
  return (
    <>
      <Head>
        <title>{query}-Project Search</title>
      </Head>
      <main>
        {/* Header */}
        <Header isSearch={true} valueText={query} />
        <div className="border-b-2 mt-2"></div>
        {/* Github repos main card detail. */}
      </main>
    </>
  );
};

export default Search;
