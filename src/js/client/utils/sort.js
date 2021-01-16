/**
 * Sort an array by due date
 * @param {Array} notos
 * @returns {Array}
 */
export default function sortByDate(notos) {
  return notos.sort((a, b) => {
    const i = a.due || '0';
    const j = b.due || '0';
    return new Date(i) - new Date(j);
  });
}
