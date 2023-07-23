import Hamburger from "./icons/Hamburger";
import Link from "next/link";
import { routes } from "@/util/constants";
import NavBarContainer from "./NavBarContainer";
import Instagram from "./icons/Instagram";
import Image from "next/image";

export default function NavBar() {
  return (
    <NavBarContainer>
      <div className="col-span-11 flex justify-start items-center md:pl-0 md:flex-grow md:justify-start">
        <Link
          href={routes.HOME}
          className="cursor-pointer whitespace-nowrap w-52 sm:w-60 flex items-center pt-1.5"
        >
          <h1>tbd</h1>
        </Link>
      </div>

      <div className="font-itcWillow flex-row md:w-200 text-lg items-center hidden md:flex">
        <div className="flex-1">
          <Link
            href={routes.ABOUT}
            className="flex cursor-pointer justify-center"
          >
            About
          </Link>
        </div>

        <Hamburger className="flex flex-1 align-middle items-center justify-center h-full cursor-pointer border-l-[1px] border-gray-200" />
      </div>

      <Hamburger className="ml-auto col-start-12 w-10 items-center md:hidden cursor-pointer" />
    </NavBarContainer>
  );
}
