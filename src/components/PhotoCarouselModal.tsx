"use client";

import { AppContext } from "@/util/context";
import { useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { images } from "@/util/constants";
import ChevronRightArrow from "./icons/ChevronRightArrow";
import ChevronLeftArrow from "./icons/ChevronLeftArrow";
import CloseX from "./icons/CloseX";

export default function PhotoCarouselModal() {
  const {
    isPhotoCarouselModalOpen,
    setPhotoCarouselModalOpen,
    selectedImageIndex,
    setSelectedImageIndex
  } = useContext(AppContext);

  const isFirstImage = selectedImageIndex === 0;
  const isLastImage = selectedImageIndex === images.length - 1;

  const navigateLeft = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent> | KeyboardEvent) => {
      e.stopPropagation();

      if (selectedImageIndex === 0) return;
      setSelectedImageIndex(selectedImageIndex - 1);
    },
    [selectedImageIndex, setSelectedImageIndex]
  );

  const navigateRight = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent> | KeyboardEvent) => {
      e.stopPropagation();

      if (selectedImageIndex === images.length - 1) return;
      setSelectedImageIndex(selectedImageIndex + 1);
    },
    [selectedImageIndex, setSelectedImageIndex]
  );

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPhotoCarouselModalOpen(false);
      }

      if (e.key === "ArrowLeft") {
        navigateLeft(e);
      }

      if (e.key === "ArrowRight") {
        navigateRight(e);
      }
    },
    [setPhotoCarouselModalOpen, navigateLeft, navigateRight]
  );

  const closePhotoCarouselModal = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent> | KeyboardEvent) => {
      e.stopPropagation();
      e.preventDefault();

      setPhotoCarouselModalOpen(false);
    },
    [setPhotoCarouselModalOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedImageIndex, handleKey]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 duration-500 ${
          isPhotoCarouselModalOpen ? "bg-opacity-80" : "invisible bg-opacity-0"
        } bg-black z-20 h-screen w-full`}
      />

      <div
        className={`flex top-0 left-0 fixed z-30 w-full h-full justify-center items-center ${
          isPhotoCarouselModalOpen ? "translate-x-0 " : "translate-x-full"
        }`}
        onClick={(e) => {
          setPhotoCarouselModalOpen(false);
        }}
      >
        <div
          className="fixed select-none cursor-pointer rounded-full p-2 opacity-80 duration-300 hover:opacity-70 active:opacity-95 bg-gray-100 top-0 right-0 mt-7 mr-7"
          onClick={closePhotoCarouselModal}
        >
          <CloseX />
        </div>

        <div
          className="fixed select-none cursor-pointer rounded-full p-2 opacity-80 duration-300 hover:opacity-70 active:opacity-95 bg-gray-100 left-0 ml-4"
          onClick={navigateLeft}
        >
          <ChevronLeftArrow />
        </div>

        <Image
          style={{ height: "80vh", width: "auto", objectFit: "cover" }}
          className="flex cursor-pointer h-[80vh] select-none"
          width={500}
          height={500}
          src={images[selectedImageIndex].src}
          title={images[selectedImageIndex].title || ""}
          alt={images[selectedImageIndex].alt || ""}
          onClick={navigateRight}
        />

        <div
          className={`${isLastImage} fixed select-none cursor-pointer rounded-full p-2 opacity-80 duration-300 hover:opacity-70 active:opacity-95 bg-gray-100 right-0 mr-4`}
          onClick={navigateRight}
        >
          <ChevronRightArrow />
        </div>
      </div>
    </>
  );
}
