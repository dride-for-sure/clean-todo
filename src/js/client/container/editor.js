import btnBar from '../components/btnBar/btnBar';
import header from '../components/header/header';

/**
 * Returns editor view
 * @param {Object} data
 * @param {String} view
 */
export default function editor(data, view, id) {
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
