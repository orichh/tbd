import {
  formatDateForPostgres,
  getAllDaysBetweenTodayAndYear,
  getEndYear
} from "../helpers";
import { bulkInsertUsersDays, getUsersDayAsync } from "../supabase";
import { UsersDayDTO } from "../types";

export const initializeNewUser = async (userId: string) => {
  try {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const endYear = getEndYear(currentYear);

    const allDaysBetweenTodayAndYear = getAllDaysBetweenTodayAndYear(
      currentDate,
      endYear
    );

    const userDays = getUsersDaysToInsert(userId, allDaysBetweenTodayAndYear);

    await bulkInsertUsersDays(userDays);
    return true;
  } catch (err) {
    return false;
  }
};

export const getUsersDaysToInsert = (
  userId: string,
  allDaysBetweenTodayAndYear: Date[]
): UsersDayDTO[] => {
  const usersDays = allDaysBetweenTodayAndYear.map((date) => {
    const usersDay: UsersDayDTO = {
      user_id: userId,
      date: date,
      total_tasks: 0,
      total_tasks_completed: 0,
      all_tasks_completed: false
    };

    return usersDay;
  });

  return usersDays;
};

export const getUsersDay = async (userId: string, date: Date) => {
  const postgresDate = formatDateForPostgres(date);

  const usersDay = await getUsersDayAsync(userId, postgresDate);

  if (!usersDay || usersDay === null) {
    return null;
  }

  return usersDay;
};
