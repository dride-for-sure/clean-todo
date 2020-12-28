/**
 * Generate HTML
 * @param {Event} e
 * @param {Array} a [[string_1,type_1],...,[string_n,type_n]
 */
export const outputHTML = (e, a) => {
    let html = '';
    a.forEach((el,i) => {
        if (el.type === 'string' && i+2 <= a.length && a[i+1].type !== 'string') {
            html += el.string;
        } else if (el.type === 'string') {
            html += el.string + ' ';
        } else if (el.type === 'whitespace') {
            html += el.string;
        } else if (el.type === 'selection focus') {
            html += `<div class="selection">${el.string}</div>`;
        } else if (el.type === 'cursor') {
            html += '<div class="cursor focus"> </div>';
        } else {
            html += `<div class="${el.type}">${el.string}</div>`;
        }
    });
    e.target.nextElementSibling.innerHTML = html;   
}

export const editable = (e) => {
    e.target.parentNode.classList.toggle('editable');
}

export const focus = (e) => {
    e.target.nextElementSibling.querySelectorAll('.cursor, .selection').forEach(e => e.classList.remove('focus'));
}