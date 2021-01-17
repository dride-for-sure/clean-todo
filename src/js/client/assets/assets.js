import darkArrowDown from '../../../assets/svg/dark/ICON_Arrow-Down.svg';
import darkArrowLeft from '../../../assets/svg/dark/ICON_Arrow-Left.svg';
// import darkArrowUp from '../../../assets/svg/dark/ICON_Arrow-Up.svg'
import darkArrowRight from '../../../assets/svg/dark/ICON_Arrow-Right.svg';
import darkBack from '../../../assets/svg/dark/ICON_Back.svg';
import darkChecked from '../../../assets/svg/dark/ICON_Checked.svg';
import darkDelete from '../../../assets/svg/dark/ICON_Delete.svg';
import darkDone from '../../../assets/svg/dark/ICON_Done.svg';
import darkDrag from '../../../assets/svg/dark/ICON_Drag.svg';
import darkEdit from '../../../assets/svg/dark/ICON_Edit.svg';
import darkMove from '../../../assets/svg/dark/ICON_Move.svg';
import darkPlus from '../../../assets/svg/dark/ICON_Plus.svg';
import darkSearch from '../../../assets/svg/dark/ICON_Search.svg';
import darkSettingsGlobal from '../../../assets/svg/dark/ICON_Settings_Global.svg';
import darkSettingsLocal from '../../../assets/svg/dark/ICON_Settings_Local.svg';
import darkShare from '../../../assets/svg/dark/ICON_Share.svg';
import darkUnchecked from '../../../assets/svg/dark/ICON_Unchecked.svg';
import darkUndone from '../../../assets/svg/dark/ICON_Undone.svg';
import lightDarklogo from '../../../assets/svg/ICON_Logo.svg';
import lightArrowDown from '../../../assets/svg/light/ICON_Arrow-Down.svg';
import lightArrowLeft from '../../../assets/svg/light/ICON_Arrow-Left.svg';
import lightArrowRight from '../../../assets/svg/light/ICON_Arrow-Right.svg';
import lightArrowUp from '../../../assets/svg/light/ICON_Arrow-Up.svg';
import lightBack from '../../../assets/svg/light/ICON_Back.svg';
import lightChecked from '../../../assets/svg/light/ICON_Checked.svg';
import lightDelete from '../../../assets/svg/light/ICON_Delete.svg';
import lightDone from '../../../assets/svg/light/ICON_Done.svg';
import lightDrag from '../../../assets/svg/light/ICON_Drag.svg';
import lightEdit from '../../../assets/svg/light/ICON_Edit.svg';
import lightMove from '../../../assets/svg/light/ICON_Move.svg';
import lightPlus from '../../../assets/svg/light/ICON_Plus.svg';
import lightSearch from '../../../assets/svg/light/ICON_Search.svg';
import lightSettingsGlobal from '../../../assets/svg/light/ICON_Settings_Global.svg';
import lightSettingsLocal from '../../../assets/svg/light/ICON_Settings_Local.svg';
import lightShare from '../../../assets/svg/light/ICON_Share.svg';
import lightUnchecked from '../../../assets/svg/light/ICON_Unchecked.svg';
import lightUndone from '../../../assets/svg/light/ICON_Undone.svg';

/**
 * Returns the asset
 * @param {String} type - icon type
 * @param {boolean} light - light?
 * @returns {URL}
 */
export default function getAssets(type, light) {
  const assets = [
    {
      arrowDown: lightArrowDown,
      arrowLeft: lightArrowLeft,
      arrowUp: lightArrowUp,
      arrowRight: lightArrowRight,
      back: lightBack,
      checked: lightChecked,
      delete: lightDelete,
      done: lightDone,
      drag: lightDrag,
      edit: lightEdit,
      logo: lightDarklogo,
      move: lightMove,
      plus: lightPlus,
      search: lightSearch,
      settingsGlobal: lightSettingsGlobal,
      settingsLocal: lightSettingsLocal,
      share: lightShare,
      unchecked: lightUnchecked,
      undone: lightUndone,
    },
    {
      arrowDown: darkArrowDown,
      arrowLeft: darkArrowLeft,
      // arrowUp: darkArrowUp,
      arrowRight: darkArrowRight,
      back: darkBack,
      checked: darkChecked,
      delete: darkDelete,
      done: darkDone,
      drag: darkDrag,
      edit: darkEdit,
      logo: lightDarklogo,
      mvoe: darkMove,
      plus: darkPlus,
      search: darkSearch,
      settingsGlobal: darkSettingsGlobal,
      settingsLocal: darkSettingsLocal,
      share: darkShare,
      unchecked: darkUnchecked,
      undone: darkUndone,
    },
  ];
  return light ? assets[0][type] : assets[1][type];
}
