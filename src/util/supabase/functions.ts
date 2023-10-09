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
    .select(
      `*,
    ${SUPABASE_TABLES.TASKS} (*)
    `
    )
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

export const updateTaskCompletionStatusAsync = async (
  taskId: number,
  isCompleted: boolean
): Promise<ApiResponse<Task | null>> => {
  const completedAt = isCompleted ? new Date() : null;

  const { data, error } = await supabase
    .from(SUPABASE_TABLES.TASKS)
    .update({ is_completed: isCompleted, completed_at: completedAt })
    .eq("id", taskId)
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

export const deleteTaskAsync = async (
  taskId: number
): Promise<ApiResponse<boolean | null>> => {
  const { data, error } = await supabase
    .from(SUPABASE_TABLES.TASKS)
    .delete()
    .eq("id", taskId);

  const response: ApiResponse<boolean | null> = {
    data: null,
    error: null
  };

  if (error) {
    response.error = error;
    return response;
  }

  return response;
};

export const updateUsersDayAsync = async (
  usersDayId: number,
  isCompleted: boolean
): Promise<boolean> => {
  const { data, error } = await supabase
    .from(SUPABASE_TABLES.USERS_DAYS)
    .update({ all_habits_completed: isCompleted })
    .eq("id", usersDayId);

  console.log("🚀 ~ file: functions.ts:132 ~ data:", data);
  console.log("🚀 ~ file: functions.ts:129 ~ error:", error);

  if (error) {
    return false;
  }

  return true;
};
