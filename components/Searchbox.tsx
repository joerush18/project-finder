import { SearchIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Router from "next/router";

const SearchBox = ({ valueText }) => {
  const [userInput, setUserInput] = useState("");
  return (
    <div className="pr-6 pl-3 py-2 rounded-3xl border-2 m-auto space-x-3 hover:shadow-md">
      <form
        autoComplete="off"
        className="flex justify-center items-center w-full space-x-4"
        onSubmit={(e) => {
          e.preventDefault();
          userInput !== "" &&
            Router.push({
              pathname: "/search",
              query: { query: userInput },
            });
        }}
      >
        <SearchIcon className="h-6 text-gray-300" />
        <input
          defaultValue={valueText ? valueText : ""}
          name="textitem"
          type="text"
          className="w-full outline-none text-sm"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <XIcon className="h-6 text-gray-300" />
      </form>
    </div>
  );
};

export default SearchBox;
