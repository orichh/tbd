import { SUPABASE_TABLES } from "../constants";
import { ApiResponse, Task, TaskDTO, UsersDay, UsersDayDTO } from "../types";
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

export const getTasksByUsersDayIdAsync = async (usersDayId: number) => {
  const { data, error } = await supabase
    .from(SUPABASE_TABLES.TASKS)
    .select("*")
    .eq("associated_day_id", usersDayId)
    .order("display_order", { ascending: true });

  if (error) {
    return [];
  }

  return data as Task[];
};

export const getUsersDayAsync = async (
  userId: string,
  postgresDate: string
) => {
  const { data, error } = await supabase
    .from(SUPABASE_TABLES.USERS_DAYS)
    .select("*")
    .eq("user_id", userId)
    .eq("date", postgresDate);

  if (error) {
    return null;
  }

  return data[0] as UsersDay;
};

export const insertTaskAsync = async (
  task: TaskDTO
): Promise<ApiResponse<Task | null>> => {
  const { data, error } = await supabase
    .from(SUPABASE_TABLES.TASKS)
    .insert(task)
    .select();

  const response: ApiResponse<Task | null> = {
    data: null,
    error: null
  };

  if (error) {
    response.error = error;
    return response;
  }

  response.data = data[0] as Task;

  return response;
};
