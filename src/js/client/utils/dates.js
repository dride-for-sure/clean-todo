/**
 * Get UTC today evening
 * @returns {Date}
 */
export const todayEvening = () => {
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  return today;
};

/**
 * Get UTC end of this week
 * @returns {Date}
 */
export const endOfThisWeek = () => {
  const today = todayEvening();
  return new Date(today.setDate(today.getDate() - today.getDay() + 7));
};

/**
 * Get UTC start of this week
 * @returns {Date}
 */
export const startOfThisWeek = () => {
  const today = todayEvening();
  return new Date(today.setDate(today.getDate() - today.getDay() + 1));
};

/**
 * Return the date string for notos list
 * @param {String} str
 * @return {String}
 */
export const listDate = str => {
  const date = new Date(str);
  const day = date.getDay();
  const month = date.getMonth();
  const d = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez'];
  return `${d[day]}, ${date.getDate()} ${m[month]}.`;
};
