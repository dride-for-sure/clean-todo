/**
 * Returns the h4 description for a list
 * @param {Array} notos
 * @param {Array} dues
 * @returns {String}
 */

export default function listsDesc(dues = [], notos = []) {
  if (dues.length && notos.length) {
    // There are due notos
    // eslint-disable-next-line prettier/prettier
    return `<h4 class="due">${dues.length} of ${notos.length} ${dues.length > 1 ? 'are' : 'is'} due</h4>`;
  }

  if (notos.length) {
    // There are no due notos
    return `<h4>${notos.length} ${notos.length > 1 ? 'are' : 'is'} fine</h4>`;
  }

  if (dues.length) {
    // Display due
    return `<h4 class="due">${dues.length} ${dues.length > 1 ? 'are' : 'is'} due`;
  }

  // List is empty
  return `<h4>nothing in here</h4>`;
}
