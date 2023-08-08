import { bulkInsertUsersDays } from "../supabase";
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

    const userDays = getUsersDays(userId, allDaysBetweenTodayAndYear);

    await bulkInsertUsersDays(userDays);
    return true;
  } catch (err) {
    return false;
  }
};

const getEndYear = (currentYear: number) => {
  if (currentYear % 5 === 0) {
    return currentYear + 5;
  }

  return Math.ceil(currentYear / 5) * 5;
};

const getUsersDays = (
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

function getAllDaysBetweenTodayAndYear(currentDate: Date, endYear: number) {
  const endDate = new Date(endYear, 0, 1); // Year, Month (0-11), Day
  endDate.setDate(endDate.getDate() - 1); // Go back one day to exclude the first day of the target year

  const daysBetween = [];
  while (currentDate <= endDate) {
    daysBetween.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return daysBetween;
}
