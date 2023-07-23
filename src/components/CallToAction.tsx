import { routes } from "@/util/constants";
import ButtonLink from "./ButtonLink";

export default function CallToAction() {
  return (
    <div
      className="flex flex-col w-full justify-center space-y-7 mt-5"
      style={{ padding: "0 1rem 0 1rem" }}
    >
      <div className="flex justify-center w-full">
        <h3 className="flex justify-center text-md text-center">
          Available on Airbnb
        </h3>
      </div>
      <div className="flex justify-center h-full">
        <ButtonLink
          href={routes.BOOK_NOW}
          className="tracking-widest font-bold flex items-center justify-center h-14 w-112 sm:w-136 text-md rounded-sm"
        >
          BOOK
        </ButtonLink>
      </div>
    </div>
  );
}
