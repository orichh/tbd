"use client";

import { routes } from "@/util/constants";
import { AppContextType } from "@/util/context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef } from "react";
import Instagram from "./icons/Instagram";
import CloseX from "./icons/CloseX";

export default function SideBar() {
  const { isSidebarOpen, setSideBarOpen } = useContext(AppContext);
  const sideBarRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  useEffect(() => {
    if (isSidebarOpen && sideBarRef.current) {
      sideBarRef.current.focus();
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    closeSideBar();
  }, [pathName]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  const closeSideBar = () => {
    setSideBarOpen(false);
  };

  return (
    <div
      className={`flex flex-col top-0 right-0 w-3/4 sm:w-64 px-5 fixed z-40 h-screen text-xl bg-green-500 text-white ease-in-out duration-300  ${
        isSidebarOpen ? "translate-x-0 " : "translate-x-full"
      }`}
      ref={sideBarRef}
      tabIndex={0}
      onBlur={closeSideBar}
    >
      <div className="flex flex-row-reverse p-5">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            sideBarRef.current?.blur();
            setSideBarOpen(false);
          }}
        >
          <CloseX className="h-10 w-10 rounded-full outline-1 outline-gray-200" />
        </button>
      </div>
      <div className="flex flex-col font-itcWillow text-2xl">
        <Link
          onMouseDown={handleLinkClick}
          href="/about"
          className="cursor-pointer lg:flex p-4"
        >
          About
        </Link>
        <Link
          onMouseDown={handleLinkClick}
          href={routes.PHOTOS}
          className="cursor-pointer lg:flex p-4"
        >
          Photos
        </Link>
        {/* <Link
          onMouseDown={handleLinkClick}
          href={routes.HISTORY}
          className="cursor-pointer lg:flex p-4"
        >
          History
        </Link> */}
        <Link
          onMouseDown={handleLinkClick}
          href={routes.WHAT_TO_DO}
          className="cursor-pointer lg:flex p-4"
        >
          What to Do
        </Link>
        <Link
          onMouseDown={handleLinkClick}
          href={routes.CONTACTS}
          className="cursor-pointer lg:flex p-4"
        >
          Contacts
        </Link>
        <a
          onMouseDown={handleLinkClick}
          href={routes.BOOK_NOW}
          className="cursor-pointer lg:flex p-4 pt-12 font-bold underline"
        >
          Book Now
        </a>
      </div>

      {/* <a
        href={routes.INSTAGRAM}
        className="flex cursor-pointer justify-center self-end"
      >
        <Instagram className="fill-gray-200 hover:fill-white" />
      </a> */}
    </div>
  );
}
