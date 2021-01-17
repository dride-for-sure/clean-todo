import getAssets from '../../assets/assets';
import { getList } from '../../utils/lists';
import { getNoto } from '../../utils/notos';

/**
 * Returns the header
 * @param {Object} data
 * @param {String} view - header for which view [lists, notos, editor, settings]
 * @param {String/Number} id
 * @returns {String}
 */
export default function composeHeader(data, view, id) {
  let buttonLeft;
  let buttonRight;
  let title;

  if (view === 'lists') {
    buttonLeft = getAssets('logo', true);
    buttonRight = getAssets('settingsGlobal', true);
    title = 'Make it so';
  } else if (view === 'notos') {
    buttonLeft = getAssets('arrowLeft', false);
    buttonRight = getAssets('settingsLocal', false);
    title = getList(data, id).title;
  } else if (view === 'editor') {
    buttonLeft = getAssets('arrowLeft', false);
    title = getNoto(data, id).title;
  } else if (view === 'settings') {
    buttonLeft = getAssets('arrowDown', false);
    title = 'Settings';
  }

  let composed = `
    <div class="header">
      <img class="btn" src="${buttonLeft}" />
      <h1>${title}</h1>
  `;
  composed += buttonRight ? `<img class="btn" src="${buttonRight}" /></div>` : `</div>`;
  return composed;
}
