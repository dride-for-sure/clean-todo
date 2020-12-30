# ToDos

## Tasks
### Now
- [x] VSCode Shortcuts
- [x] Events.js -> Refactor
- [x] Ui.js -> Toggle (&& Move ui.js toggle)
- [x] Ui.js -> toggleEmptyClass -> helper.modifyClassList
- [ ] scss:
  - [ ] refactor
  - [ ] colorize due/overdue
  - [ ] label visible with selection
- [ ] add github as remote
- [ ] ~~DoubleClick useful? -> https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event for detail~~
### Later
- [x] Selection Problem (Node Updates so slow!)
- [x] Remove Selection/Cursor when blur
- [ ] New ToDos to DOM
- [ ] Events for Keystrokes
- [ ] LocalStorage Init/Read/Write/Update/Delete
- [ ] VSCode Highlights (DEBUG / REVIEW)
- [ ] Exclude unwanted bootstrap modules

## Features
### UI
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