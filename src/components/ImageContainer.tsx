"use client";

import { AppContextType } from "@/util/context";
import { useContext } from "react";

type Props = {
  children: any;
  imageIndex: number;
};
export default function ImageContainer({ children, imageIndex }: Props) {
  const { setPhotoCarouselModalOpen, setSelectedImageIndex } =
    useContext(AppContext);

  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    setPhotoCarouselModalOpen(true);
    setSelectedImageIndex(imageIndex);
  };

  return (
    <div
      onClick={clickHandler}
      className="col-span-6 sm:col-span-4 lg:col-span-3 max-h-80 cursor-pointer duration-300 brightness-100 hover:brightness-35"
    >
      {children}
    </div>
  );
}
