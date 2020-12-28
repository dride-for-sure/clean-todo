import {Data} from '../components/data.js';
import * as ui from '../components/ui.js';

export class CMD {
    
    constructor() {};

    /**
     * TODO:
     * @param {Event} e 
     */
    init(e) {
        // uuid
        // get existing or new uuid
        const uuid = this.uuidv4;
        // data
        // try to get data
        const data = new Data();
        const itemData = data.item(uuid);
        // check existing data
        if (itemData === null) {
            // -> empty
            // --> generate html with input field
            // console.log('No data at local storage');
        } else {
            // -> not empty
            // --> generate html with existing Data
            // --> set focus to new input field
            // console.log('Data -> generate html');
        }
    }

    /**
     * Analyze the cmd and generate HTML output
     * @param {Event} e
     */
    analyze(e) {
        const inputValue = this.extractInputString(e);
        const splitString = this.getSelection(e, inputValue);
        const output = splitString.map(e => { // [e={string},{string, selection},{string}]
            // return this.addTypes(e);
            if (e.type === 'selection' || e.type === 'cursor') {
                return e;
            } else {
                return this.addTypes(e.string);
            }
        })
        ui.outputHTML(e, output.flat());
        //ui.outputHTML(e, this.cloneCursor(e, this.addTypes(this.extractInputString(e.target))));
    }

   /**
    * Extract string from INPUT/DIV
    * @param {Event} e
    * @returns {string} string
    */
    extractInputString(e) {
        return e.target.value;
    }
    
    /**
     * Create Array [string, type]
     * @param {string} s
     * @returns {Array} [{string, type}]
     */
    addTypes(s) {
        return s.split(' ').map( e => {
            if (e.startsWith('#') && e.length > 1){
                return {string: e, type: 'tag'};
            } else if (e.startsWith('due:') && e.length > 4) {
                return {string: e, type: 'due'}; //TODO: pase date for invalid format
            } else if (e.startsWith('@') && e.length > 1) {
                return {string: e, type: 'assign'};
            } else if (e === 'prio') {
                return {string: 'prio', type: 'prio'};
            } else if (e === '') {
                return {string: ' ', type: 'whitespace'};
            } else {
               return {string: e, type: 'string'};
            }
        })
    }

    /**
    * Add Cursor to Array
    * @param {Event} e
    * @param {String} s [[string_1,type_1],...,[string_n,type_n]
    * @returns {Array} [{string, selection},{string, selection},{string, selection}]
    */
    getSelection(e, s) {
        const selectionStart = e.target.selectionStart;
        const selectionEnd = e.target.selectionEnd;
        const beforeSelection = s.substr(0, selectionStart);
        const theSelection = s.substr(selectionStart, selectionEnd - selectionStart);
        const afterSelection = s.substr(selectionEnd);
        let output = [];
        if (beforeSelection !== '') {
            output.push({string: beforeSelection});
        }
        if (theSelection !== '') {
            output.push({string: theSelection, type: 'selection' });
        } else {
            output.push({string: theSelection, type: 'cursor' });
        }
        if (afterSelection !== '') {
            output.push({string: afterSelection});
        }
        return output;
    }

    /**
     * Check if data-uuid is available, else create uuidv4
     * @param {Event} e
     * @returns {string} uuidv4 
     */
    uuidv4(e) {
        const uuid = e.target.getAttribute('data-uuid');
        if (typeof uuid === true) {
            return uuid;
        } else {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    }

}