import getBtnBar from '../components/btnBar/btnBar';
import getHeader from '../components/header/header';
import getListsPredefined from '../components/lists/getListsPredefined';
import getListsUserDefined from '../components/lists/getListsUserDefined';

/**
 * Returns lists view
 * @param {Object} data
 * @param {String} view
 */
export default function lists(data, view) {
  return `
  <div class="container" tabindex="0">
    ${getHeader(data, view)}
    ${getListsUserDefined(data)}
  </div>
  <div class="container fixed-bottom">
    ${getListsPredefined(data)}
    ${getBtnBar(view)}
  </div>
`;
}
