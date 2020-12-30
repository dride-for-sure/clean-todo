# ToDos

## Tasks
### Now
- [x] VSCode Shortcuts
- [x] Events.js -> Refactor
- [x] Ui.js -> Toggle (&& Move ui.js toggle)
- [x] Ui.js -> toggleEmptyClass -> helper.modifyClassList
- [x] Switch from div inside p tag to span
- [x] scss:
  - [x] refactor
  - [x] colorize due
  - [x] label visible with selection
- [x] Remove invisible class, check if **input** is **empty**
- [x] Remove focus class, check if **input** has **focus**
- [ ] add github as remote
- [ ] ~~DoubleClick useful? -> https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event for detail~~
### Later
- [x] Selection Problem (Node Updates so slow!)
- [x] Remove Selection/Cursor when blur
- [ ] New ToDos to DOM
- [ ] Events for Keystrokes
- [ ] LocalStorage Init/Read/Write/Update/Delete
- [x] VSCode Highlights (DEBUG / REVIEW)
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