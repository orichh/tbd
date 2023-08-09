import { SUPABASE_TABLES } from "../constants";
import { Task, UsersDay, UsersDayDTO } from "../types";
import { supabase } from "./supabaseClient";

export const bulkInsertUsersDays = async (usersDays: UsersDayDTO[]) => {
  const { data, error } = await supabase
    .from(SUPABASE_TABLES.USERS_DAYS)
    .insert(usersDays);

  return error;
};

export const getUsersDay = async (userId: string, date: Date) => {
  const postgresDate = formatDateForPostgres(date);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const yearMonthDay = `${year}-${month}-${day}`;

  const { data: usersDays, error: usersDayError } = await supabase
    .from(SUPABASE_TABLES.USERS_DAYS)
    .select("*")
    .eq("user_id", userId)
    .eq("date", yearMonthDay);

  const usersDay = usersDays[0] as UsersDay;

  const { data: tasks, error: tasksError } = await supabase
    .from(SUPABASE_TABLES.TASKS)
    .select("*")
    .eq("associated_day_id", usersDay?.id);

  console.log("🚀 ~ file: functions.ts:34 ~ getUsersDay ~ tasks:", tasks);

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

const formatDateForPostgres = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
