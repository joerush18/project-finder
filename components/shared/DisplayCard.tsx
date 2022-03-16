import React, { FC } from "react";
import {
  StarIcon,
  DuplicateIcon,
  ClockIcon,
  DocumentAddIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import Moment from "react-moment";
import Link from "next/link";
import { CardProps } from "../../interfaces/interfaces";

const DisplayCard: FC<CardProps> = ({ result, isBookmark }) => {
  const {
    name,
    desc,
    repoLink,
    createdAt,
    stars,
    forks,
    language,
    author,
    topics,
  } = result;
  // TODO: Remove the type issue errors
  const addToLocalStorage = (e) => {
    e.preventDefault();
    var existing = localStorage.getItem("result");
    if (existing == undefined) {
      const arr = [result];
      localStorage.setItem("result", [JSON.stringify(arr)].toString());
    } else {
      const arr = JSON.parse(existing);
      arr.push(result);
      localStorage.setItem("result", [JSON.stringify(arr)].toString());
    }
  };

  // TODO: Make this function work

  const removeFromlocalStorage = (e) => {
    e.preventDefault();
    alert("This feature will come soon.");
  };

  return (
    <div>
      <Link href={repoLink} passHref>
        <div className="shadow-sm border-2 rounded-lg p-4  hover:shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img
                src={author.authorAvatar}
                alt=""
                className="h-14 rounded-full"
              />
              <div>
                <a href={author.authorProfile} target="_blank" rel="noreferrer">
                  <h1 className="font-bold text-sm cursor-pointer  hover:underline opacity-50">
                    {author.authorUname}
                  </h1>
                </a>

                <p className="font-bold text-green-500">{language}</p>
              </div>
            </div>
            {isBookmark ? (
              <TrashIcon
                className="h-6 text-rose-600 hover:text-fuchsia-600"
                onClick={removeFromlocalStorage}
              />
            ) : (
              <DocumentAddIcon
                className="h-6 text-green-600 hover:text-fuchsia-600"
                onClick={addToLocalStorage}
              />
            )}
          </div>

          <div className="text-sm font-bold opacity-40 flex items-center space-x-1 mt-2">
            <ClockIcon className="h-4" />
            <Moment fromNow>{createdAt}</Moment>
          </div>

          <div className="flex  items-center space-x-4">
            <div className="mt-2 flex items-center space-x-1">
              <StarIcon className="h-4 text-yellow-400" />
              <p className="font-bold text-sm">{stars}</p>
            </div>
            <div className="mt-2 flex items-center space-x-1">
              <DuplicateIcon className="h-4 text-red-400" />
              <p className="font-bold text-sm">{forks}</p>
            </div>
          </div>

          <h1 className="font-bold text-lg opacity-90 cursor-pointer">
            {name}
          </h1>
          <p className="text-sm opacity-60">{desc}</p>

          <div>
            {topics.map((item, index) => {
              return (
                <button
                  key={index}
                  className="bg-backgroundDark rounded-lg px-3 py-2 mr-2 mt-2 text-white text-sm font-bold"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DisplayCard;
