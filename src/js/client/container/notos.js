import composeBtnBar from '../components/btnBar/btnBar';
import composeHeader from '../components/header/header';
import composeList from '../components/notos/list';

/**
 * Returns notos view
 * @param {Object} data
 * @param {String} view
 * @param {String} listId
 */
export default function composeNotos(data, view, listId, complete) {
  return `
  <div class="container" tabindex="0">
    ${composeHeader(data, view, listId)}
    ${composeList(data, listId, complete)}
  </div>
  <div class="container fixed-bottom">
    ${composeBtnBar(view)}
  </div>
`;
}
