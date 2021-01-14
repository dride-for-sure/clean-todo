import getAsset from '../../assets/assets'

/**
 * Returns the fixed-bottom predefined lists
 */
export default function listsPredefined() {
  // TODO: get listsPredefined
  // get Settings!
  const listsPredefined = []
  let output = ''
  listsPredefined.forEach((list) => {
    const listName = ''
    const listMeta = ''
    const listMetaClass = ''
    output += `
    <div class="list list-predefined">
      <div class="list-item">
        <div>
          <h3>${listName}</h3>
          <h4 class="${listMetaClass}">${listMeta}</h4>
        </div>
        <img class="btn" src="${getAsset('arrowRight', true)}" />
      </div>
    </div>
    `
  })
  return output
}
