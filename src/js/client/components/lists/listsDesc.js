/**
 * Returns the h4 description for a list
 * @param {Array} notos
 * @param {Array} dueNotos
 * @returns {String}
 */

export default function composeListsDescription(notos, dueNotos) {
  if (dueNotos.length && notos.length) {
    // There are due notos
    // eslint-disable-next-line prettier/prettier
    return `<h4 class="due">${dueNotos.length} of ${notos.length} ${dueNotos.length > 1 ? 'are' : 'is'} due</h4>`;
  }

  if (notos.length) {
    // There are no due notos
    return `<h4>${notos.length} ${notos.length > 1 ? 'are' : 'is'} fine</h4>`;
  }

  if (dueNotos.length) {
    // Display due
    return `<h4 class="due">${dueNotos.length} ${dueNotos.length > 1 ? 'are' : 'is'} due`;
  }

  // List is empty
  return `<h4>nothing in here</h4>`;
}
