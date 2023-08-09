import { SUPABASE_TABLES } from "../constants";
import { formatDateForPostgres } from "../helpers";
import { Task, UsersDay, UsersDayDTO } from "../types";
import { supabase } from "./supabaseClient";

/**
 * Use when onboarding a new user. Bulk insert the user's "UsersDay"
 * @param usersDays
 * @returns
 */
export const bulkInsertUsersDays = async (usersDays: UsersDayDTO[]) => {
  const { data, error } = await supabase
    .from(SUPABASE_TABLES.USERS_DAYS)
    .insert(usersDays);

  return error;
};

export const getUsersDay = async (userId: string, date: Date) => {
  const postgresDate = formatDateForPostgres(date);

  const { data: usersDays, error: usersDayError } = await supabase
    .from(SUPABASE_TABLES.USERS_DAYS)
    .select("*")
    .eq("user_id", userId)
    .eq("date", postgresDate);

  if (usersDayError) {
    return null;
  }

  const usersDay = usersDays[0] as UsersDay;

  const { data: tasks, error: tasksError } = await supabase
    .from(SUPABASE_TABLES.TASKS)
    .select("*")
    .eq("associated_day_id", usersDay?.id);

  const data: UsersDay = {
    id: usersDay.id,
    user_id: userId,
    date: usersDay.date,
    total_tasks: usersDay.total_tasks,
    total_tasks_completed: usersDay.total_tasks_completed,
    all_tasks_completed: usersDay.all_tasks_completed,
    tasks: tasks as Task[]
  };

  return data;
};
