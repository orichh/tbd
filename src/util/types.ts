export type Task = {
  id: number;
  name: string;
  created_at: Date;
  is_completed: boolean;
  time_spent_in_minutes_actual: number;
  time_spent_in_minutes_estimate: number;
  completed_at: Date;
  notes: string;
  display_order: number;
  user_id: number;
  associated_day_id: number;
};

export type User = {
  id: number;
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
};

export type UsersDayDTO = {
  user_id: string;
  date: Date;
  total_tasks: number;
  total_tasks_completed: number;
  all_tasks_completed: boolean;
};
