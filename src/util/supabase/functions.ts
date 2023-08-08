import { SUPABASE_TABLES } from "../constants";
import { UsersDayDTO } from "../types";
import { supabase } from "./supabaseClient";

export const bulkInsertUsersDays = async (usersDays: UsersDayDTO[]) => {
  console.log(
    "🚀 ~ file: functions.ts:6 ~ bulkInsertUsersDays ~ usersDays:",
    usersDays
  );

  const { error } = supabase.from(SUPABASE_TABLES.USERS_DAYS).insert(usersDays);

  console.log(
    "🚀 ~ file: functions.ts:7 ~ bulkInsertUsersDays ~ error:",
    error
  );

  return error;
};
