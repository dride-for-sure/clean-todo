import btnBar from '../components/btnBar/btnBar';
import header from '../components/header/header';
import list from '../components/notos/list';

/**
 * Returns notos view
 * @param {Object} data
 * @param {String} view
 * @param {String} id
 */
export default function notos(data, view, id) {
  return `
  <div class="container" tabindex="0">
    ${header(data, view, id)}
    ${list(data, id)}
  </div>
  <div class="container fixed-bottom">
    ${btnBar(view)}
  </div>
`;
}
