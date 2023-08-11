/**
 * Determines if the current browser is Safari.
 *
 * @returns {boolean} `true` if the current browser is Safari, `false` otherwise.
 */
export const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

/**
 * Formats a JavaScript Date object into a PostgreSQL-compatible date string.
 *
 * @param {Date} date - The JavaScript Date object to be formatted.
 * @returns {string} The formatted date string in the 'YYYY-MM-DD' format.
 */
export const formatDateForPostgres = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

/**
 * Calculates the nearest end year that is a multiple of 5.
 *
 * @param {number} currentYear - The current year.
 * @returns {number} The nearest end year that is a multiple of 5.
 */
export const getEndYear = (currentYear: number) => {
  if (currentYear % 5 === 0) {
    return currentYear + 5;
  }

  return Math.ceil(currentYear / 5) * 5;
};

/**
 * Retrieves an array of all days between the current date and the specified end year.
 *
 * @param {Date} currentDate - The starting date.
 * @param {number} endYear - The target end year.
 * @returns {Date[]} An array of Date objects representing the days between the current date and the end year.
 */
export const getAllDaysBetweenTodayAndYear = (
  currentDate: Date,
  endYear: number
) => {
  const endDate = new Date(endYear, 0, 1); // Year, Month (0-11), Day
  endDate.setDate(endDate.getDate() - 1); // Go back one day to exclude the first day of the target year

  const daysBetween = [];
  while (currentDate <= endDate) {
    daysBetween.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return daysBetween;
};

/**
 * Compare two JavaScript Date objects without considering the time component.
 *
 * @param {Date} date1 - The first Date object to compare.
 * @param {Date} date2 - The second Date object to compare.
 * @returns {number} A comparison result:
 *                   - `0` if the dates are equal.
 *                   - `-1` if `date1` is earlier than `date2`.
 *                   - `1` if `date1` is later than `date2`.
 */
export function compareDatesWithoutTime(date1: Date, date2: Date) {
  const newDate1 = new Date(
    date1.getFullYear(),
    date1.getMonth(),
    date1.getDate()
  );
  const newDate2 = new Date(
    date2.getFullYear(),
    date2.getMonth(),
    date2.getDate()
  );

  if (newDate1.getTime() === newDate2.getTime()) {
    return 0; // Dates are equal
  } else if (newDate1 < newDate2) {
    return -1; // date1 is earlier
  } else {
    return 1; // date1 is later
  }
}

/**
 * Removes the first occurrence of a specified value from a new array.
 *
 * @template T - The type of elements in the array.
 * @param {Array<T>} arr - The array from which to remove the value.
 * @param {T} value - The value to be removed from the array.
 * @returns {Array<T>} A new array with the specified value removed, or the original array if the value was not found.
 */
export function removeItem<T>(arr: Array<T>, value: T): Array<T> {
  const newArray = arr.filter((item) => item !== value);
  return newArray;
}
