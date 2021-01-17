import composeBtnBar from '../components/btnBar/btnBar';
import composeHeader from '../components/header/header';
import composeListsPredefined from '../components/lists/listsPredefined';
import composeListsUser from '../components/lists/listsUser';
/**
 * Returns lists view
 * @param {Object} data
 * @param {String} view
 */
export default function composeLists(data, view) {
  return `
  <div class="container" tabindex="0">
    ${composeHeader(data, view)}
    ${composeListsUser(data)}
  </div>
  <div class="container fixed-bottom">
    ${composeListsPredefined(data)}
    ${composeBtnBar(view)}
  </div>
`;
}
