import { useNewAppContext } from "@/util/context";
import Modal from "../Modal";
import CloseX from "../icons/CloseX";
import { useState } from "react";
import { addNewUserHabitAsync } from "@/util/supabase/functions/habits";

export default function HabitsModal() {
  const { isHabitModalOpen, setIsHabitModalOpen, user } = useNewAppContext();
  const [name, setName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsHabitModalOpen(false);
  };

  const handleDivClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAddHabit = async () => {
    if (!user?.id) {
      return;
    }

    setIsLoading(true);
    await addNewUserHabitAsync(name, user.id);
    setIsLoading(false);
    handleCloseModal();
  };

  return (
    <div>
      <Modal isModalOpen={isHabitModalOpen} handleCloseModal={handleCloseModal}>
        <div
          className="fixed select-none cursor-pointer rounded-full p-2 opacity-80 duration-100 hover:opacity-70 active:opacity-95 bg-gray-100 top-0 right-0 mt-7 mr-7"
          onClick={handleCloseModal}
        >
          <CloseX />
        </div>

        <div
          className="flex flex-col bg-white w-112 h-80 items-center"
          onClick={handleDivClick}
        >
          <h1>Add New Habit</h1>

          <input
            className="w-40 border-2 border-black"
            placeholder="habit"
            value={name}
            onChange={handleNameInputChange}
          />
          <div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              cancel
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleAddHabit}
              disabled={isLoading}
            >
              add
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
