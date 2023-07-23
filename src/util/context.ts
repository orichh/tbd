import { createContext } from "react";

type AppContext = {
  isSidebarOpen: boolean;
  setSideBarOpen: (value: any) => void;
  isPhotoCarouselModalOpen: boolean;
  setPhotoCarouselModalOpen: (value: any) => void;
  selectedImageIndex: number;
  setSelectedImageIndex: (value: number) => void;
};

export const AppContext = createContext<AppContext>({
  isSidebarOpen: false,
  setSideBarOpen: function () {},
  isPhotoCarouselModalOpen: false,
  setPhotoCarouselModalOpen: function () {},
  selectedImageIndex: 0,
  setSelectedImageIndex: function () {}
});
