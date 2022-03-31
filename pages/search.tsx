import React, { FC, useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { useRouter } from "next/router";
import DisplayCard from "../components/shared/DisplayCard";
import axios from "axios";
import Footer from "../components/Footer";
import { ResultsInterface } from "../interfaces/interfaces";
import ClipLoader from "react-spinners/ClipLoader";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import toast from "react-hot-toast";

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
  const [load, setLoad] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const [pageCounter, setPageCounter] = useState<number>(1);

  const fetchItems = async () => {
    setLoad(true);
    setError(false);
    try {
      if (query) {
        const { data } = await axios.get(
          `https://api.github.com/search/repositories?q=${query}&sort=star&per_page=5&page=${pageCounter}`
        );
        const finalResult = data.items.map((item: any, index: number) => {
          return mapResult(item);
        });
        setResults(finalResult);
        setLoad(false);
      }
    } catch (error) {
      setLoad(false);
      setError(true);
      setErrorMessage(error.message);
    }
  };

  const onNextPageHandler = async (e) => {
    e.preventDefault();
    fetchItems();
    setPageCounter(pageCounter + 1);
  };

  const onPreviousPageHandler = async (e) => {
    e.preventDefault();
    fetchItems();
    setPageCounter(pageCounter - 1);
  };

  const addToLocalStorage = (e, item: ResultsInterface) => {
    e.preventDefault();
    var existing = localStorage.getItem("result");
    if (existing == undefined) {
      const arr = [item];
      localStorage.setItem("result", [JSON.stringify(arr)].toString());
    } else {
      const arr = JSON.parse(existing);
      const isExist = arr.some((val) => {
        if (val.id === item.id) {
          return true;
        }
      });
      if (isExist) {
        toast.error("Item already in bookmark !");
      } else {
        arr.push(item);
        localStorage.setItem("result", [JSON.stringify(arr)].toString());
        toast.success("Successfully added to bookmark !");
      }
    }
  };

  //  TODO: Implement change of icon for already bookmarked item

  useEffect(() => {
    fetchItems();
    setPageCounter(1);
  }, [query]);

  return (
    <>
      <Head>
        <title>{query}-Project Search</title>
      </Head>
      <main>
        {/* Header */}
        <div className="sticky top-0 z-40 bg-white left-0 right-0">
          <Header isSearch={true} valueText={query} />
          <div className="mt-2 flex justify-start mx-24 pb-2  ">
            <h1 className="font-bold">
              <span className="text-md text-pink-500 font-bold mr-2">
                Search results for :-
              </span>
              {query}({pageCounter})
            </h1>
          </div>
        </div>
        {/* Github repos main card detail. */}
        {load ? (
          <div className="flex justify-center mt-8">
            <ClipLoader />
          </div>
        ) : (
          <div className="mx-20 mt-4 space-y-4">
            {results.map((result: ResultsInterface, index: number) => {
              return (
                <DisplayCard
                  key={result.id}
                  result={result}
                  isBookmark={false}
                  onAdd={(e) => addToLocalStorage(e, result)}
                  onDelete={undefined}
                />
              );
            })}
          </div>
        )}
        {/* see more */}
        {results.length >= 5 && (
          <div className="flex items-center justify-center mt-4 space-x-2 ">
            {pageCounter > 1 && (
              <h1
                onClick={onPreviousPageHandler}
                className="text-md font-bold  cursor-pointer hover:underline text-pink-500 "
              >
                ({pageCounter - 1}) Previous
              </h1>
            )}

            <h1
              onClick={onNextPageHandler}
              className="text-md font-bold  cursor-pointer hover:underline text-purple-500 "
            >
              Next ({pageCounter + 1})
            </h1>
          </div>
        )}

        {/* Error item */}
        {error && (
          <div className="flex justify-center shadow-md rounded-lg w-[400px] mx-auto p-10 hover:shadow-lg mt-10 items-center text-sm font-bold text-red-400 space-x-2 border-t-2">
            <ExclamationCircleIcon className="h-10 mr-4" />
            Some error occured. <br />
            {errorMessage}
          </div>
        )}

        {/* footer */}
        <div className="my-4">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Search;
