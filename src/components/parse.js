export class Parse {
    constructor() {};

    seen = []; // [{string:'#foo', type:'tag', confirmedType:true, ignore:false}]
    strings = '';
    
    metaDataControl(e) { 
        console.log(` ${e.code}`);
        if (e.code === 'Enter') {
            e.preventDefault();
            this.seen.forEach((obj,i) => {
                if (obj.ignore == '') {this.seen[i].ignore = false;};
                console.log(obj);
                console.log(this.seen);
                typeControl;
            });
        } else if (e.code === 'Escape') {
            e.preventDefault();
            this.seen.forEach((obj,i) => {
                if (obj.ignore == '') {this.seen[i].ignore = true;};
                console.log(obj);
                console.log(this.seen);
                typeControl;
            });
        }
    };
    
    
    typeControl(e) {
        console.log('typeControl');
        if (input.textContent.length === 0) {
            this.seen = [];
            result.innerText = '';
            return;
        } else {
            strings = input.innerText.split(' '); // TODO: trim the array!
        }
        
        
        // Compare seen with string
        // Update seen
        strings.forEach((word,i) => {
            if (this.seen.length === 0 || this.seen.length - 1 < i) {
                this.seen.push({string: word});
            } else if (this.seen[i].string !== word) { // TODO: seen ^= a word ^= aa
                console.log(this.seen[i].string);
                console.log(word);
                this.seen[i] = {string: word};
            }
        })
        // compare length
        if (strings.length !== this.seen.length) {
            this.seen.splice(strings.length);
        }
        
        // Parse seen for metadata
        this.seen.forEach(obj => {
            if (obj.string.search('#') === 0) {
                obj.type = 'tag';
                obj.ignore = '';
            }
        });
        
        console.log(this.seen);
        
        const final = this.seen.map(e => e.type === 'tag' && e.ignore !== false ? `<mark>${e.string}</mark>` : e.string);
        document.querySelector('#inputCardTitle').innerHTML = final.join(' ');
        
    };
};