import { PostgrestError } from "@supabase/supabase-js";

export type Task = TaskDTO & {
  id: number;
};

export type User = {
  id: string;
  updated_at: Date;
  username: string;
  full_name: string;
  avatar_url: string;
  win_streak_longest: number;
  win_streak_current: number;
  lose_streak_longest: number;
  lose_streak_current: number;
};

export type UsersDay = {
  id: number;
  user_id: string;
  date: Date;
  total_tasks: number;
  total_tasks_completed: number;
  all_tasks_completed: boolean;
  tasks: Task[];
  all_habits_completed: boolean;
};

export type UsersDayDTO = {
  user_id: string;
  date: Date;
  total_tasks: number;
  total_tasks_completed: number;
  all_tasks_completed: boolean;
};

// use to insert record
export type TaskDTO = {
  name: string;
  is_completed: boolean;
  time_spent_in_minutes_actual: number;
  time_spent_in_minutes_estimate: number;
  completed_at: Date | null;
  notes: string;
  display_order: number;
  user_id: string;
  associated_day_id: number;
};

export interface ApiResponse<TData> {
  data: TData;
  error: PostgrestError | null;
}

export type Habit = {
  id: number;
  created_at: Date;
  name: string;
  is_completed: boolean;
  sunday: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  user_id: string;
};
