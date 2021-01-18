/**
 * Get today evening timestamp
 * @returns {Number}
 */
export const getDateToday = () => {
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  return today.getTime();
};

/**
 * Get yesterday evening timestamp
 * @returns {Number}
 */
export const getDateYesterday = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(23, 59, 59, 999);
  return yesterday.getTime();
};

/**
 * Get end of this week timestamp
 * @returns {Number}
 */
export const getDateWeekEnd = () => {
  const today = new Date(getDateToday());
  return today.setDate(today.getDate() - today.getDay() + 7);
};

/**
 * Get start of this week timestamp
 * @returns {Number}
 */
export const getDateWeekStart = () => {
  const today = new Date(getDateToday());
  return today.setDate(today.getDate() - today.getDay() + 1);
};

/**
 * Return the date string for notos list
 * @param {Number} timestamp
 * @return {String}
 */
export const composeListDate = timestamp => {
  const date = new Date(timestamp);
  const day = date.getDay();
  const month = date.getMonth();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dez',
  ];
  return `${days[day]}, ${date.getDate()} ${months[month]}.`;
};
