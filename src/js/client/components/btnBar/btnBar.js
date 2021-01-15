import getAsset from '../../assets/assets';

/**
 * Returns the fixed-bottom button bar
 * @param {string} view - [lists, notos, editor]
 * @returns {string}
 */
export default function getBtnBar(view) {
  let btns = [];
  if (view === 'lists' || view === 'notos') {
    btns = ['back', 'plus', 'search', 'edit', 'checked', 'delete'];
  } else if (view === 'editor') {
    btns = ['back', 'plus', 'checked', 'move', 'share', 'delete'];
  }

  let output = '';
  btns.forEach(el => {
    output += `<img class="btn btn-${el}" src="${getAsset(el, 'light')}">`;
  });

  return `<div class="btn-bar btn-bar-${view}">${output}</div>`;
}
