"use client";

import { AppContext } from "@/util/context";
import { useContext } from "react";

export default function BlurContainer() {
  const { isSidebarOpen } = useContext(AppContext);

  return (
    <div
      className={`fixed duration-500 ${
        isSidebarOpen ? "bg-opacity-50" : "invisible bg-opacity-0"
      } bg-black z-10 h-screen w-full`}
    ></div>
  );
}
