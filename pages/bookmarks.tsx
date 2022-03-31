import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DisplayCard from "../components/shared/DisplayCard";
import { ResultsInterface } from "../interfaces/interfaces";
import toast from "react-hot-toast";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    const result = localStorage.getItem("result");
    const results = JSON.parse(result);
    setBookmarks(results);
  }, []);

  const removeFromlocalStorage = (e, res: ResultsInterface) => {
    e.preventDefault();
    toast.error("Bookmark successfully deleted !!");
    const result = localStorage.getItem("result");
    const results = JSON.parse(result);
    const updatedResults = results.filter((item: ResultsInterface) => {
      return item.id !== res.id;
    });
    localStorage.setItem("result", [JSON.stringify(updatedResults)].toString());
    setBookmarks(updatedResults);
  };

  return (
    <div>
      <div className="sticky top-0 z-40 bg-white left-0 right-0">
        <Header isSearch={true} valueText={""} />
        <div className="mt-2 flex justify-start items-center mx-20 pb-2  ">
          <h1>
            <span className="text-lg text-pink-500 font-bold mr-2">
              Bookmarks : {bookmarks.length}
            </span>
          </h1>
        </div>
      </div>
      {bookmarks.length !== 0 ? (
        <div className="mx-20 mt-4 space-y-4">
          {bookmarks.map((result, _) => {
            return (
              <DisplayCard
                key={result.id}
                result={result}
                isBookmark={true}
                onDelete={(e) => removeFromlocalStorage(e, result)}
                onAdd={undefined}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-left text-red-400 font-bold text-sm mt-5 mx-20">
          <h1>Looks like no bookmarks is added.</h1>
          <p>Start adding now.</p>
        </div>
      )}
      {bookmarks !== null && (
        <div className="my-4">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
