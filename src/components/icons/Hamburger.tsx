"use client";

import { AppContextType } from "@/util/context";
import { useContext } from "react";

type Props = {
  clickHandler?: () => any;
  className?: string;
};
export default function Hamburger({ clickHandler, className }: Props) {
  const { isSidebarOpen, setSideBarOpen } = useContext(AppContext);

  return (
    <div className={className} onClick={() => setSideBarOpen(true)}>
      <svg
        className="flex items-center p-2"
        fill="#000000"
        viewBox="0 0 100 80"
        width="40"
        height="40"
      >
        <rect width="100" height="10"></rect>
        <rect y="30" width="100" height="10"></rect>
        <rect y="60" width="100" height="10"></rect>
      </svg>
    </div>
  );
}
