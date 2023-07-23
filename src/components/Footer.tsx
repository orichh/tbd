import { routes } from "@/util/constants";
import CallToAction from "./CallToAction";
import Instagram from "./icons/Instagram";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-gray-200">
      <Image
        src="/logo-bottom.svg"
        width={300}
        height={300}
        alt="test"
        className="pt-20"
      />

      <CallToAction />

      <div className="p-10">
        <a href={routes.INSTAGRAM} className="">
          <div className="flex items-center justify-center h-6 w-6 cursor-pointer rounded-full">
            <Instagram className="h-full w-full fill-gray-700 hover:fill-green-500" />
          </div>
        </a>
      </div>

      <div className="flex w-full max-w-screen-xl pb-10 justify-center items-center">
        <span className="flex text-xs text-gray-500 text-center">
          © 2023 Red Camp Hancock
        </span>
      </div>
    </footer>
  );
}
