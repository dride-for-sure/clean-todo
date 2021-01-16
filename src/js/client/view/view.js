import editor from '../container/editor';
import lists from '../container/lists';
import notos from '../container/notos';
import settings from '../container/settings';
import { createElement, getElements } from '../utils/helper';

/**
 * Represent the model visually
 * @class View
 */
export default class View {
  constructor() {
    [this.body] = getElements('body');

    // TestData
    this.data = {
      settings: {
        predefinedLists: [
          { id: 1, title: 'Today', enabled: true },
          { id: 2, title: 'Priority', enabled: true },
          { id: 3, title: 'Within a week', enabled: true },
          { id: 4, title: 'Without due date', enabled: true },
          { id: 5, title: 'All Notos', enabled: true },
        ],
      },
      lists: [
        {
          id: 1,
          title: 'userList1',
          notos: [
            {
              id: 1,
              list: 'userList1',
              title: 'nototitleID1',
              noto: 'contentOfNoto1',
              due: '2020-04-03',
              priority: true,
              tags: ['tag1', 'tag2'],
              assigns: [],
              complete: false,
            },
            {
              id: 2,
              list: 'userList1',
              title: 'nototitleID2',
              noto: 'contentOfNoto2',
              due: '2021-04-03',
              priority: false,
              tags: ['tag1', 'tag2'],
              assigns: [],
              complete: false,
            },
            {
              id: 2,
              list: 'userList1',
              title: 'nototitleID2',
              noto: 'contentOfNoto2',
              due: '2021-01-14',
              priority: false,
              tags: ['tag1', 'tag2'],
              assigns: [],
              complete: false,
            },
            {
              id: 3,
              list: 'userList1',
              title: 'nototitleID3',
              noto: 'contentOfNoto3',
              due: undefined,
              priority: false,
              tags: [],
              assigns: ['test1', 'test2'],
              complete: false,
            },
          ],
        },
        {
          id: 2,
          title: 'userList2',
          notos: [
            {
              id: 1,
              list: 'userList2',
              title: 'nototitleID1',
              noto: 'contentOfNoto1',
              due: '2021-04-03',
              priority: false,
              tags: ['tag1', 'tag2'],
              assigns: [],
              complete: true,
            },
            {
              id: 1,
              list: 'userList2',
              title: 'nototitleID1',
              noto: 'contentOfNoto1',
              due: '2021-01-17',
              priority: false,
              tags: ['tag1', 'tag2'],
              assigns: [],
              complete: false,
            },
            {
              id: 2,
              list: 'userList2',
              title: 'nototitleID2',
              noto: 'contentOfNoto2',
              due: '2020-04-03',
              priority: true,
              tags: ['tag1', 'tag2'],
              assigns: [],
              complete: false,
            },
          ],
        },
        {
          id: 3,
          title: 'userList3',
          notos: [],
        },
      ],
    };
  }

  /**
   * Display the view
   * @param {Array} data
   * @param {String} view - lists, notos, editor, settings, search
   * @param {String} id - id of a noto or list
   * @param {Boolean} complete
   */
  displayView(data, view = 'notos', id = 1, complete = false) {
    // this.data = data;
    const wrapper = createElement('div', `#${view} .wrapper`);
    let content;
    if (view === 'lists') {
      content = lists(this.data, view); // parameter is view
    } else if (view === 'notos') {
      content = notos(this.data, view, id, complete);
    } else if (view === 'editor') {
      content = editor(this.data, view, id);
    } else if (view === 'settings') {
      content = settings(this.data);
    }
    wrapper.innerHTML = content;
    this.body.append(wrapper);
  }

  /**
   * Clear the page (e.g. onDataChanged)
   */
  clearView() {
    this.body.removeChild(this.body.childNodes[0]);
  }
}
