/**
 * Returns all notos as array
 * @param {Object} data
 * @returns {Array}
 */
export const getNotos = data => {
  const notos = [];
  data.listsUser.forEach(list => notos.push(...list.notos));
  return notos;
};

/**
 * Return a noto object
 * @param {String} id
 * @returns {Object}
 */
export const getNoto = (data, id) => getNotos(data).find(noto => noto.id === id);

/**
 * Return notos within a date range as array
 * @param {Array} notos
 * @param {Number} startDate - timestamp
 * @param {Number} endDate - timestamp
 * @returns {Array}
 */
export const getNotosWithinRange = (notos, endDate, startDate = 0) =>
  notos.filter(noto => noto.due <= endDate && noto.due >= startDate);

/**
 * Return notos if matches specific key:value
 * @param {Array} notos
 * @param {Object} meta - {key: value}
 * @returns {Array}
 */
export const getNotosWithMeta = (notos, meta) =>
  notos.filter(noto => {
    let match = false;
    Object.keys(meta).forEach(key => {
      if (noto[key] === meta[key]) {
        match = true;
      }
    });
    return match;
  });

/**
 * Return filtered notos array
 * @param {Array} notos
 * @param {Boolean} complete
 * @returns {Array}
 */

export const filterNotos = (notos, complete = false) =>
  notos.filter(noto => noto.complete === complete);

/**
 * Sort an array by due date
 * @param {Array} notos
 * @returns {Array}
 */
export const sortNotosByDate = notos => notos.sort((a, b) => (a.due || 0) - (b.due || 0));
