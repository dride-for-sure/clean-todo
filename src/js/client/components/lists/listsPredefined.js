import getAsset from '../../assets/assets'

/**
 * Returns the fixed-bottom predefined lists
 * TODO: get listsPredefined + get Settings
 * @returns {string}
 */
export default function getListsPredefined() {
  const listsPredefined = []
  let output = ''
  listsPredefined.forEach((list) => {
    const toggle = list.dues > 0 ? 'due' : 'noDue' // <-- Add SCSS Classes
    const meta =
      list.dues > 0
        ? `${list.dues} of ${list.tasks.length} are due`
        : 'everything seems fine'
    output += `
    <div class="list list-predefined">
      <div class="list-item">
        <div>
          <h3>${list.name}</h3>
          <h4 class="${toggle}">${meta}</h4>
        </div>
        <img class="btn" src="${getAsset('arrowRight', true)}" />
      </div>
    </div>
    `
  })
  return output
}
