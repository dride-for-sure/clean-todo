import btnBar from '../components/btnBar/btnBar';
import getListsPredefined from '../components/lists/listsPredefined';
import getListsUserDefined from '../components/lists/listsUserDefined';

export default function listView() {
  return `
  <div class="wrapper" style="display: none" id="list-view">  
    <div class="container" tabindex="0">
      // Header
      ${getListsUserDefined()}
    </div>
    <div class="container fixed-bottom">
      ${getListsPredefined()}
      ${btnBar('list')}
    </div>
  </div>
`;
}
