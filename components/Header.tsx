import Image from "next/image";
import SearchBox from "./Searchbox";
import Link from "next/link";

const Header = ({ isSearch, valueText }) => {
  return (
    <div>
      <div className=" h-12 w-full flex justify-evenly items-center mt-2 ml-4">
        <div>
          <Link href={"/"}>
            <Image src={"/images/logo.png"} height={54} width={54} />
          </Link>
        </div>
        <div className="w-full flex-1 ml-8 mr-16">
          {isSearch && <SearchBox valueText={valueText} />}
        </div>
        <div className="flex justify-around text-sm items-center mr-6 space-x-4">
          <h1 className="hover:underline cursor-pointer">Github</h1>
          <button className="bg-backgroundDark px-5 py-2 text-white rounded-md">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
