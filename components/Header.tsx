import Image from "next/image";
import SearchBox from "./Searchbox";
import Link from "next/link";
import { FC } from "react";

interface HeaderProps {
  isSearch: boolean;
  valueText?: string | string[];
}

const Header: FC<HeaderProps> = ({ isSearch, valueText }) => {
  return (
    <div>
      <div className="h-12 w-full flex justify-evenly items-center mt-2 ml-4">
        <div>
          <Link href={"/"} passHref>
            <Image src={"/images/logo.png"} height={54} width={54} />
          </Link>
        </div>
        <div className="w-full flex-1 ml-8 mr-16">
          {isSearch && (
            <div className="w-[600px]">
              <SearchBox valueText={valueText} />
            </div>
          )}
        </div>
        <div className="flex justify-around text-sm items-center mr-6 space-x-4">
          <a
            href="https://github.com/joerush18/project-finder"
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="hover:underline cursor-pointer">Github</h1>
          </a>

          <button className="bg-backgroundDark px-5 py-2 text-white rounded-md">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
