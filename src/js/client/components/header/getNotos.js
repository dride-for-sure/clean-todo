/**
 * Returns all notos as array
 * @param {Object} data
 * @returns {Array}
 */
export const getAllNotos = data => {
  const notos = [];
  data.lists.forEach(list => notos.push(...list.notos));
  return notos;
};

/**
 * Return a noto object
 * @param {String} id
 * @returns {Object}
 */
export const getNoto = (data, id) => {
  const notos = getAllNotos(data);
  console.log(notos);
  return notos.find(noto => noto.id === id);
};
