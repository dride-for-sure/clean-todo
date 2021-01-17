import composeBtnBar from '../components/btnBar/btnBar';
import composeHeader from '../components/header/header';
import composeList from '../components/notos/list';

/**
 * Returns notos view
 * @param {Object} data
 * @param {String} view
 * @param {String} id
 */
export default function composeNotos(data, view, id, complete) {
  return `
  <div class="container" tabindex="0">
    ${composeHeader(data, view, id)}
    ${composeList(data, id, complete)}
  </div>
  <div class="container fixed-bottom">
    ${composeBtnBar(view)}
  </div>
`;
}
