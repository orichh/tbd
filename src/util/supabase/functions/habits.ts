import { SUPABASE_TABLES } from "@/util/constants";
import { Habit } from "@/util/types";
import { supabase } from "../supabaseClient";

export const getUserHabitsAsync = async (userId: string) => {
  const { data, error } = await supabase
    .from(SUPABASE_TABLES.HABITS)
    .select("*")
    .order("name", { ascending: true })
    .eq("user_id", userId);

  if (error) {
    return null;
  }

  return data as Habit[];
};

export const addNewUserHabitAsync = async (
  habitName: string,
  userId: string
) => {
  const { data, error } = await supabase
    .from(SUPABASE_TABLES.HABITS)
    .insert([{ name: habitName, user_id: userId }])
    .select();

  if (error) {
    return false;
  }

  return true;
};

export const updateHabitIsCompletedStatus = async (
  habitId: number,
  isCompleted: boolean
) => {
  const { data, error } = await supabase
    .from(SUPABASE_TABLES.HABITS)
    .update({ is_completed: isCompleted })
    .eq("id", habitId)
    .select();

  if (error) {
    return false;
  }

  return true;
};
