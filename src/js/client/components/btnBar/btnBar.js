import getAssets from '../../assets/assets';

/**
 * Returns the fixed-bottom button bar
 * @param {String} view - [lists, notos, editor]
 * @returns {String}
 */
export default function composeBtnBar(view) {
  let buttons = [];
  if (view === 'lists' || view === 'notos') {
    buttons = ['back', 'plus', 'search', 'edit', 'checked'];
  } else if (view === 'editor') {
    buttons = ['back', 'plus', 'checked', 'move', 'share', 'delete'];
  }

  let composed = '';
  buttons.forEach(el => {
    composed += `<img class="btn btn-${el}" src="${getAssets(el, 'light')}">`;
  });

  return `<div class="btn-bar btn-bar-${view}">${composed}</div>`;
}
