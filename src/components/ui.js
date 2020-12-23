// UI Functionality
// TODO: Rewrite (new Data handling)

export class UI {
    constructor() {};

    toogle(event) {
        const target = event.target.getAttributeNode('data-collapse-target').value;
        document.querySelector(target).classList.toggle('d-none');
    }

    // TODO: Add all properties
    addToHtml(uuid, title, desc) {
        const cardList = document.querySelector('#card-list');
        const div = document.createElement('div');
        div.classList.add('col-12','mb-3');
        div.setAttribute('data-uuid', uuid);
        div.innerHTML = 
                    `<div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${desc}</p>
                            <div class="row justify-content-between mt-2">
                                <div class="col-auto">
                                    <button class="btn btn-outline-primary">Edit</button>
                                </div>
                                <div class="col-auto"0>
                                    <button class="btn btn-outline-danger" data-delete-target="${uuid}">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cardList.appendChild(div);
    }

    deleteFromHtml(uuid) {
        const cardList = document.querySelector('#card-list');
        const card = document.querySelector([`[data-uuid="${uuid}"]`]);
        cardList.removeChild(card);
        eventListener();
    }
}