import React, { FC, useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { useRouter } from "next/router";
import DisplayCard from "../components/shared/DisplayCard";
import axios from "axios";
import Footer from "../components/Footer";
import { ResultsInterface } from "../interfaces/interfaces";

type ResultsType = [ResultsInterface];

const mapResult = (item: any): ResultsInterface => {
  return {
    id: item.id,
    name: item.name,
    desc: item.description,
    repoLink: item.html_url,
    createdAt: item.created_at,
    stars: item.watchers,
    forks: item.forks,
    language: item.language,
    author: {
      authorAvatar: item.owner.avatar_url,
      authorUname: `@${item.owner.login}`,
      authorProfile: item.owner.html_url,
    },
    topics: item.topics.length < 1 ? ["No topics"] : item.topics,
  };
};

const Search: FC = () => {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState<ResultsType | []>([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (query) {
          const { data } = await axios.get(
            `https://api.github.com/search/repositories?q=${query}&sort=star&per_page=10&page=1`
          );
          const finalResult = data.items.map((item: any, index: number) => {
            return mapResult(item);
          });
          setResults(finalResult);
        }
      } catch (error) {
        console.log("Error.");
      }
    };
    fetchResults();
  }, [query]);

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

        <div className="mx-20 mt-4 space-y-4">
          {results.map((result: ResultsInterface, index: number) => {
            return <DisplayCard key={result.id} result={result} />;
          })}
        </div>
        <div className="flex justify-center">
          <h1 className="mx-auto text-md font-bold mt-2 cursor-pointer hover:underline">
            See more...
          </h1>
        </div>
        <div className="my-4">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Search;
