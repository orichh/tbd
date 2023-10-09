import { useNewAppContext } from "@/util/context";
import HabitsModal from "./HabitsModal";
import { updateHabitIsCompletedStatus } from "@/util/supabase/functions/habits";
import { useEffect } from "react";
import { updateUsersDayAsync } from "@/util/supabase";

export default function Habits() {
  const { habits, setIsHabitModalOpen, usersDay } = useNewAppContext();
  const handleMarkUserHabitAsComplete = async (
    habitId: number,
    isCompleted: boolean
  ) => {
    updateHabitIsCompletedStatus(habitId, isCompleted);
  };
  const isAllHabitsComplete = habits.every((h) => h.is_completed);

  useEffect(() => {
    if (!usersDay) {
      return;
    }

    if (isAllHabitsComplete) {
      updateUsersDayAsync(usersDay?.id, true);
    } else {
      updateUsersDayAsync(usersDay?.id, false);
    }
  }, [isAllHabitsComplete, usersDay]);

  return (
    <div
      className={`flex flex-col w-112 space-y-0 items-center border-2 border-black sm:w-136 h-60 ${
        isAllHabitsComplete ? "bg-green-400" : "bg-white"
      }`}
    >
      <h1>
        Habits
        <span
          className="cursor-pointer"
          onClick={() => setIsHabitModalOpen(true)}
        >
          +
        </span>
      </h1>

      <div className="overflow-scroll">
        {habits.length > 0 ? (
          habits.map((h, i) => {
            return (
              <div
                key={i}
                onClick={() =>
                  handleMarkUserHabitAsComplete(h.id, !h.is_completed)
                }
                className={`cursor-pointer ${
                  h.is_completed ? "line-through" : ""
                }`}
              >
                {h.name}
              </div>
            );
          })
        ) : (
          <span>no habits</span>
        )}
      </div>

      <HabitsModal />
    </div>
  );
}
