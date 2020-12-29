# ToDos

## Tasks
### Tomorrow
- > Events.js -> Refactor
- > DoubleClick useful? -> https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event for detail
- > scss -> refactor
- > scss -> colorize due/overdue
- > scss -> label visible with selection
### Later
- [x] Selection Problem (Node Updates so slow!)
- [x] Remove Selection/Cursor when blur
- New ToDos to DOM
- Events for Keystrokes
- LocalStorage Init/Read/Write/Update/Delete

## UI
- commandLine
  - commands:
    - search: #tags due: prio: @assign
    - sort: name #tags due prio @assign
    - match typing: #tags due prio @assign / Enter accept or ESC abort
    - enter: preventDefault -> submit
- todos
  - change color if due is near (gradient?)
  - change fonts weight if prio
  - keystrokes
    - up/down -> select before/next item
    - enter -> start editing
    - enter+enter -> toggle status
    - enter+enter+enter -> select commandLine & start editing
    - enter -> submit    
- init()
- errorHandler()
- vscode Highlight (DEBUG / REVIEW)
- Exclude unwanted bootstrap modules