// Imports
import {UI} from '../components/ui.js';
import {Data} from '../components/data.js';
import {Parse} from '../components/parse.js';

// TODO: Rewrite (cause of new data handling)
// EventListener UI
export const eventListener = () => {

    const ui = new UI();
    const data = new Data();
    const parse = new Parse();

    // Init (read localstorage)
    let liveData = data.read();
    liveData.forEach(e => ui.addToHtml(e.uuid, e.title, e.desc));

    // Submit
    // TODO: Change querySelector to look in event for item.properties
    document.querySelector('#card-form').addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event);
        const formID = 'form#card-form';
        const title = document.querySelector(formID + '#card-title').value;
        const note = document.querySelector(formID + '#card-note').value;
        const due = document.querySelector(formID + '#card-due').value;
        const priority = document.querySelector(formID + '#card-priority').value;
        const status = document.querySelector(formID + '#card-status').value;
        data.create({title: title, notes: note});
        ui.addToHtml(uuid, title, note);
    })

    // Edit

    // Delete
    document.querySelectorAll('[data-delete-target').forEach(btn => {
        btn.addEventListener('click', (event) => {
            const uuid = event.target.getAttributeNode('data-delete-target').value;
            console.log(document.querySelectorAll('[data-delete-target'));
            data.deleteFromLocalStorage(uuid);
            ui.deleteFromHtml(uuid);
        })
    })

    // TypeControl
    document.querySelector('#inputCardTitle').addEventListener('keydown', parse.metaDataControl);

    document.querySelector('#inputCardTitle').addEventListener('input', parse.typeControl);
}