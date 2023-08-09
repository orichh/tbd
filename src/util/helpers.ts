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
