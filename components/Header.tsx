import Image from "next/image";
import SearchBox from "./Searchbox";
import Link from "next/link";
import { FC } from "react";

interface HeaderProps {
  isSearch: boolean;
  valueText?: string | string[];
  bookmarksCount?: number;
}

const Header: FC<HeaderProps> = ({ isSearch, valueText, bookmarksCount }) => {
  return (
    <div className="h-12 w-full flex justify-evenly items-center bg-white">
      <Link href={"/"} passHref>
        <Image src={"/images/logo.png"} height={54} width={54} />
      </Link>

      <div className="w-full flex-1 ml-8 mr-16">
        {isSearch && (
          <div className="w-[600px] mt-2">
            <SearchBox valueText={valueText} />
          </div>
        )}
      </div>
      <div className="flex justify-around text-sm items-center mr-6 space-x-4">
        <Link href="/bookmarks">
          <div className="flex justify-center items-center space-x-2 ">
            {/* <div className="rounded-full h-5 bg-red-500 px-2">
              <h1 className="text-sm font-bold text-white text-center">1</h1>
            </div> */}
            <h1 className="hover:underline cursor-pointer">Bookmarks</h1>
          </div>
        </Link>
        <a
          href="https://github.com/joerush18/project-finder"
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="hover:underline cursor-pointer">Github</h1>
        </a>
        <Link href={"https://www.buymeacoffee.com/journeyto"}>
          <div className=" text-white rounded-md hover:opacity-80">
            <Image src={"/images/bmc-button.png"} height={30} width={100} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
