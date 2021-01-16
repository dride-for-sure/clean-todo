/**
 * Returns all notos as array
 * @param {Object} data
 * @returns {Array}
 */
export const allNotos = data => {
  const notos = [];
  data.listsUser.forEach(list => notos.push(...list.notos));
  return notos;
};

/**
 * Return a noto object
 * @param {String} id
 * @returns {Object}
 */
export const aNoto = (data, id) => {
  const notos = allNotos(data);
  return notos.find(noto => noto.id === id);
};

/**
 * Return notos within a date range as array
 * @param {Array} notos
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {Array}
 */
export const notosWithinRange = (notos, endDate, startDate = 0) =>
  notos.filter(
    noto => new Date(`${noto.due}Z`) <= endDate && new Date(`${noto.due}Z`) >= startDate,
  );

/**
 * Return notos if matches specific key:value
 * @param {Array} notos
 * @param {Object} meta - {key: value}
 * @returns {Array}
 */
export const notosWithMeta = (notos, meta) => {
  const filtered = notos.filter(noto => {
    let match = false;
    Object.keys(meta).forEach(key => {
      if (noto[key] === meta[key]) {
        match = true;
      }
    });
    return match;
  });
  return filtered;
};

/**
 * Return notos that are incomplete or complete
 * @param {Array} notos
 * @param {Boolean} incomplete
 * @returns {Array}
 */

export const notosIncomplete = (notos, incomplete = true) =>
  notos.filter(noto => noto.complete !== incomplete);
