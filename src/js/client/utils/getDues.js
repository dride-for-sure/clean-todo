/**
 * Returns due notos as array
 * @param {Array} arr - array with notos objects
 * @param {String} id - list id
 * @return {Array}
 */
export default function getDues(arr) {
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  const dueNotos = arr.filter(notos => new Date(`${notos.due}Z`) <= today);
  return dueNotos;
}

/*
Obj Date:
Valid date formats:
2020-01-31
31-01-2020

Possible inputs:
2020-01-03
31-01-2020
1d
1w
1m
1y
*/
