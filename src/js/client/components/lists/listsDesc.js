/**
 * Returns the h4 description for a list
 * @param {Array} notos
 * @param {Array} dueNotos
 * @returns {String}
 */

export default function composeListsDescription(notos, dueNotos) {
  if (dueNotos.length && notos.length) {
    // due notos
    // eslint-disable-next-line prettier/prettier
    return `<h4 class="due">${dueNotos.length} of ${notos.length} ${dueNotos.length > 1 ? 'are' : 'is'} due</h4>`;
  }

  if (notos.length) {
    // no due notos
    return `<h4>${notos.length} ${notos.length > 1 ? 'are' : 'is'} fine</h4>`;
  }

  if (dueNotos.length) {
    // just due
    return `<h4 class="due">${dueNotos.length} ${dueNotos.length > 1 ? 'are' : 'is'} due`;
  }

  // empty
  return `<h4>empty</h4>`;
}
