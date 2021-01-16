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
