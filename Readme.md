# TODO:
    - UPDATE!

## UI
- commandLine
  - parse plain text with 1s delay while typing and insert/remove 'mark' if necessary
  - commands:
    - backspace: deleting chars
    - search: #tags due: prio: @assign
    - sort: name #tags due prio @assign
    - match typing: #tags due prio @assign / Enter accept or ESC abort
    - enter: preventDefault -> submit
- todos
  -  
  - change color if due is near (gradient?)
  - change fonts weight if prio
  - keystrokes
    - up/down -> select before/next item
    - enter -> start editing
    - enter+enter -> toggle status
    - enter+enter+enter -> select commandLine & start editing
    - enter -> submit    
- class eventListeners
  - toggles
  - submit
  - edit
  - delete
  - done
  - drag
- init()
- errorHandler()
- vscode Highlight (DEBUG / REVIEW)
- SCSS CleanUp
  - Exclude unwanted bootstrap modules
  - fonts scss vars etc. pp. -> base font size = todoItems f. size


### commandline concept:
- keydown (input / enter)
  - everything is a div, except the div with aktiv with the cursor
  - CMD+A -> js, copy all
  - backspace: 
    - when prompt position in input === 0 -> convert div before to input -> move cursor on input.length
    - when leaving input -> convert back to div