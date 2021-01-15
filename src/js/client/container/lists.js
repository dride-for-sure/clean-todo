import getBtnBar from '../components/btnBar/btnBar';
import getHeader from '../components/header/header';
import getListsPredefined from '../components/lists/listsPredefined';
import getListsUserDefined from '../components/lists/listsUserDefined';

/**
 * Returns lists view
 * @param {Object} data
 * @param {String} view
 */
export default function lists(data, view) {
  return `
  <div class="container" tabindex="0">
    ${getHeader(view)}
    ${getListsUserDefined()}
  </div>
  <div class="container fixed-bottom">
    ${getListsPredefined()}
    ${getBtnBar(view)}
  </div>
`;
}
