import getBtnBar from '../components/btnBar/btnBar';
import getListsPredefined from '../components/lists/listsPredefined';
import getListsUserDefined from '../components/lists/listsUserDefined';

export default function listView() {
  return `
  <div class="wrapper" id="list">  
    <div class="container" tabindex="0">
      // Header
      ${getListsUserDefined()}
    </div>
    <div class="container fixed-bottom">
      ${getListsPredefined()}
      ${getBtnBar('list')}
    </div>
  </div>
`;
}
