"use client";

import { useWindowScroll } from "@/util/hooks";

type Props = {
  children: any;
};
export default function NavBarContainer({ children }: Props) {
  const [{ x, y }, scrollTo] = useWindowScroll();

  return (
    <nav
      className={`grid grid-cols-6 items-center md:flex md:flex-row sticky top-0 shadow-sm w-full h-16 pl-0 pr-2 sm:pl-7 z-20 bg-white ease-in-out duration-200 ${
        y > 0 ? "md:h-16" : "md:h-26"
      }`}
    >
      {children}
    </nav>
  );
}
