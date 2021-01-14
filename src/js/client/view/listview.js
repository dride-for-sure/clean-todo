import btnBar from '../components/btnBar/btnBar'
import listsPredefined from '../components/lists/listsPredefined'
import listsUserDefined from '../components/lists/listsUserDefined'

export default function listView() {
  return `
  <div class="wrapper" style="display: none" id="list-view">  
    <div class="container" tabindex="0">
      ${listsUserDefined()}
    </div>
    <div class="container fixed-bottom">
      ${listsPredefined()}
      ${btnBar()}
    </div>
  </div>
`
}
