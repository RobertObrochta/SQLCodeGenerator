# SQLCodeGenerator

## Description

## Live Demo Link

## Feature Implementations

### Planning

- [ ] Implement Save State of current board (from TableContext)
    - Initial state will be fetched and passed into TableProvider value={_} in App.js
    - This will also render the tables in their **last saved (x, y) coordinates**, so this needs to be implemented alongside this feature
- [ ] In the AddTableModal, have an option to remove an attribute if one is accidentally added
- [ ] Right click options on created tables... *more discussions needed*

### In Progress

### Completed

- [x] Add movable div to screen
- [x] Add button to spawn a new div
- [x] Modal to edit and add to a SQL Table div: 
    - Table name
    - Variable
    - Data type
- [x] BUG: Movable divs go outside the bounds of the browser window **when minimizing windows**
- [x] Expand TableContext field to include all possible fields of an individual table
    - title
    - attributes

### Bugs
