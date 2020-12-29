import {CMD} from '../components/cmd.js';
import * as ui from '../components/ui.js';


//TODO: Combine same EventListener!
export const eventListener = () => {

    // Initialize cmd class
    const cmd = new CMD();

    // Focus
    // Editable
    document.querySelectorAll('.cmd > *').forEach(el => {
        el.addEventListener('focus', (e) => {
            //cmd.init(e);
            ui.editable(e);
        })
    })

    // Blur
    // Editable and focus
    document.querySelectorAll('.cmd > *').forEach(el => {
        el.addEventListener('blur', (e) => {
            ui.focus(e);
            ui.editable(e);
        })
    })

    // Input
    // Analyze or save
    document.querySelectorAll('.cmd > input').forEach(el => {
        el.addEventListener('input', (e) => {
            cmd.analyze(e);
        })
    })

    // Select
    // Analyze
    document.querySelectorAll('.cmd > input').forEach(el => {
        el.addEventListener('select', (e) => {
            cmd.analyze(e);
        })
    })

    // Click
    // Analyze
    document.querySelectorAll('.cmd > input').forEach(el => {
        el.addEventListener('click', (e) => {
            setTimeout(function(){
                cmd.analyze(e);
           },20);
        })
    })
}

const compensateDOMDelay = () => {
    setTimeout(function(){
        cmd.analyze(e);
   }, 20);
}

