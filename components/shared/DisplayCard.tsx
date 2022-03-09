import React, { FC } from "react";
import { StarIcon, DuplicateIcon, ClockIcon } from "@heroicons/react/solid";
import Moment from "react-moment";
import Link from "next/link";
import { CardProps } from "../../interfaces/interfaces";

const DisplayCard: FC<CardProps> = ({ result }) => {
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
  return (
    <div>
      <Link href={repoLink}>
        <div className="shadow-sm border-2 rounded-lg p-4  hover:shadow-md">
          <div className="flex items-center space-x-2">
            <img
              src={author.authorAvatar}
              alt=""
              className="h-14 rounded-full"
            />
            <div>
              <a href={author.authorProfile} target="_blank">
                <h1 className="font-bold text-sm cursor-pointer  hover:underline opacity-50">
                  {author.authorUname}
                </h1>
              </a>

              <p className="font-bold text-green-500">{language}</p>
            </div>
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
