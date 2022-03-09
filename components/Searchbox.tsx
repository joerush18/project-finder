import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import React, { useState, FC, SyntheticEvent, FormEvent } from "react";
import Router from "next/router";

interface SearchBoxProps {
  valueText?: string | string[];
}

const SearchBox: FC<SearchBoxProps> = ({ valueText }) => {
  const [userInput, setUserInput] = useState<string | null>("");

  const onSubmitHandler = (e): void => {
    e.preventDefault();
    userInput !== "" &&
      Router.push({
        pathname: "/search",
        query: { query: userInput },
      });
  };

  const onCrossHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="pr-6 pl-3 py-2 rounded-3xl border-2 m-auto space-x-3 hover:shadow-md">
      <form
        autoComplete="off"
        className="flex justify-center items-center w-full space-x-4"
        onSubmit={onSubmitHandler}
      >
        <SearchIcon className="h-6 text-gray-300" />
        <input
          defaultValue={valueText ? valueText : ""}
          name="textitem"
          type="text"
          className="w-full outline-none text-sm"
          onChange={(e) => {
            setUserInput(e.currentTarget.value);
          }}
        />
        <div onClick={onCrossHandler}>
          <MicrophoneIcon className="h-4 text-gray-300 hover:text-red-800" />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
