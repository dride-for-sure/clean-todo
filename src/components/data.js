import {errorHandler} from './error.js';

export class Data {
    constructor() {};

    // Catch localStorage Errors
    // return true || errorHandler
    localStorageAvailable() {
        let storage;
        try {
            const x = '__storage_test___';
            localStorage.setItem(x, x);
            localStorage.removeItem(x);
            return true;
        }
        catch {
           errorHandler('localStorageAvailable: false');
        }
    }

    // Read from localStorage
    // return [{todo_1},...,{todo_n}] or []
    read() {
        if (this.localStorageAvailable) {
            const allData = this.parse(localStorage.getItem('todoData'));
            return Array.isArray(allData) ? allData : [];
        }
    }

    // Get an item
    // Returns {todo_k} or null
    item(uuid) {
        const allData = this.read();
        const index = allData.findIndex(e => e.uuid === uuid);
        return index === -1 ? null : allData[index];
    }

    /*
    // Create: create todoItem in localStorage, unique uuid
    // todoItem {todo_k}
    // return [{todo_1},.{todo_k}.,{todo_n}]
    create(todoItem) {
        const item = new Item(
            todoItem.title,
            todoItem.note,
            todoItem.due,
            todoItem.priority,
            todoItem.status,
            this.uuidv4()
        );
        const todoData = this.read();
        while (todoData.findIndex(e => e.uuid === item.uuid) !== -1 && !item.uuid) { // uuid unique?
            item.uuid = this.uuidv4();
        }
        todoData.unshift(item);
        localStorage.setItem('todoData', this.stringify(todoData)); // attach before all other elements
        return this.read();
    }

    // Update: Write to localStorage
    // todoItem {todo_k}
    // return [{todo_1},.{todo_k}..,{todo_n}] || false
    update(todoItem) {
        const todoData = this.read();
        if (todoData.length > 0) { // [...]
            const indexItem = todoData.findIndex(item => item.uuid === todoItem.uuid);
            if (indexItem !== -1) {
                todoData[indexItem] = todoItem;
             } else {
                errorHandler('update: uuid not in localStorage -> init html again'); // same indexItem ? update : errorHandler
                return this.read(todoData);
             } 
            localStorage.setItem('todoData', this.stringify(todoData));
            return this.read();
        } else { // []
            errorHandler('update: empty localStorage');
            return false;
        }
    }

    // Delete: delete todoItem in localStorage
    // todoItem {todo_k}
    // return [{todo_1},.{todo_k}.,{todo_n}] || false
    delete(todoItem) {
        const todoData = this.read();
        if (todoData.length > 0) {
            const indexItem = todoData.findIndex(item => item.uuid === todoItem.uuid);
            if (indexItem !== -1) {
                todoData.splice(indexItem,1);
            } else {
                errorHandler('delete: uuid doesnt exist');
                return todoData;
            }
            localStorage.setItem('todoData', this.stringify(todoData));
            return this.read();
        } else {
            errorHandler('delete: nothing to delete');
            return false;
        }
    }*/

    parse(e) {
        try {
            const json = JSON.parse(e);
            return json;
        }
        catch {
            errorHandler('Parse: not a json object');
        }
    }

    stringify(e) {
        return JSON.stringify(e);
    }

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

// DEBUG: 
// const data = new Data();
// console.log(data.create({title:'title1', due:'2020-04-10'}));
// console.log(data.update({uuid:'277bf745-ab3b-4cc4-ae84-4d6bd48e6aaa', title:'title2'}));