"use client";

import { AppContext } from "@/util/context";
import { useState } from "react";

type Props = {
  children: any;
};
export default function ContextProvider({ children }: Props) {
  const [isSidebarOpen, setSideBarOpen] = useState<boolean>(false);
  const [isPhotoCarouselModalOpen, setPhotoCarouselModalOpen] =
    useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setSideBarOpen,
        isPhotoCarouselModalOpen,
        setPhotoCarouselModalOpen,
        selectedImageIndex,
        setSelectedImageIndex
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
