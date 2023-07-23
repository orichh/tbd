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
          <Image
            src="/logo-top.svg"
            width={100}
            height={100}
            alt="test"
            className="h-full w-full object-cover object-center -my-10"
          />
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

        <div className="flex-1">
          <Link
            href={routes.PHOTOS}
            className="flex cursor-pointer justify-center"
          >
            Photos
          </Link>
        </div>

        {/* <div className="flex-1">
          <Link
            href={routes.HISTORY}
            className="flex cursor-pointer justify-center"
          >
            History
          </Link>
        </div> */}

        <div className="flex-1 whitespace-nowrap px-2 pr-4">
          <Link
            href={routes.WHAT_TO_DO}
            className="flex cursor-pointer justify-center"
          >
            What to Do
          </Link>
        </div>

        <div className="flex-1 pr-4">
          <Link
            href={routes.CONTACTS}
            className="flex cursor-pointer justify-center"
          >
            Contacts
          </Link>
        </div>

        <div className="flex-1">
          <div className="flex border-2 border-gray-400 w-18 h-8 hover:border-green-500 hover:text-green-500">
            <a
              href={routes.BOOK_NOW}
              className="flex w-full h-full cursor-pointer items-center align-middle justify-center"
            >
              Book
            </a>
          </div>
        </div>

        <div className="flex-1">
          <a
            href={routes.INSTAGRAM}
            className="flex cursor-pointer justify-center"
          >
            <Instagram className="fill-gray-700 hover:fill-green-500" />
          </a>
        </div>

        <Hamburger className="flex flex-1 align-middle items-center justify-center h-full cursor-pointer border-l-[1px] border-gray-200" />
      </div>

      <Hamburger className="ml-auto col-start-12 w-10 items-center md:hidden cursor-pointer" />
    </NavBarContainer>
  );
}
