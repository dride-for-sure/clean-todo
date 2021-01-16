import btnBar from '../components/btnBar/btnBar';
import header from '../components/header/header';

/**
 * Returns notos view
 * @param {Object} data
 * @param {String} view
 */
export default function notos(data, view, id) {
  return `
  <div class="container" tabindex="0">
    ${header(data, view, id)}
    // Notos
  </div>
  <div class="container fixed-bottom">
    ${btnBar(view)}
  </div>
`;
}
