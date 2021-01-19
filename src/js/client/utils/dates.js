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
 * Get end timestamp for 'within a week'
 * @returns {Number}
 */
export const getDateWithinAWeekEnd = () => {
  const today = new Date(getDateToday());
  return today.setDate(today.getDate() - today.getDay() + 6);
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
