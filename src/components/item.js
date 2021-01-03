export class Item {
	constructor(
		id,
        desc,
        tags = '',
		due = null,
		assign = null,
		prio = false,
		status = true
	) {
		this.id = id;
        this.desc = desc;
        this.tags = tags;
		this.due = due;
		this.assign = assign;
		this.prio = prio;
		this.status = status;
	}

    /**
     * Returns the HTML Boilerplate
     * @returns {String}
     */
	getboilerplate() {
		return `
            <div class="col">
                <div class="position-relative">
                    <div class="m-0 cmd cmd-secondary due">
                        <input class="border-0" type="text"
                            data-task-id="${this.id}"
                            data-task-desc="${this.desc}"
                            data-task-tags="${this.tags}"
                            data-task-due="${this.due}"
                            data-task-assign="${this.assign}"
                            data-task-prio="${this.prio}"
                            data-task-status="${this.status}"
                            >
                        <p></p>
                    </div>
                </div>               
            </div>`;
    }
    
    /**
     * Returns Container Classes
     * @returns {Array}
     */
    getcontainerClasses() {
        return ['row','justify-content-center', 'align-items-center', 'pt-2'];
    }
}
