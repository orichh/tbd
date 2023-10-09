import { ReactNode } from "react";

type Props = {
  isModalOpen: boolean;
  children?: ReactNode;
  handleCloseModal: () => void;
};
export default function Modal({
  isModalOpen,
  children,
  handleCloseModal
}: Props) {
  return (
    <>
      <div
        className={`fixed top-0 left-0 duration-300 ${
          isModalOpen ? "bg-opacity-50" : "invisible bg-opacity-0"
        } bg-black z-20 h-screen w-full`}
      />

      <div
        className={`flex rounded-sm top-0 left-0 fixed z-30 w-full h-full justify-center items-center ${
          isModalOpen ? "translate-x-0 " : "translate-x-full"
        }`}
        onClick={(e) => {
          handleCloseModal();
        }}
      >
        {children}
      </div>
    </>
  );
}
