# SQLCodeGenerator

## Description

## Live Demo Link

## Feature Implementations

### Planning

- [ ] Expand TableContext field to include all possible fields of an individual table, as well as their set... functions
    - title
    - attributes
    - coordinates as they are moved around
    - anything else
- [ ] Implement Save State of current board (from TableContext)
    - Initial state will be fetched and passed into TableProvider value={_} in App.js

### In Progress
- [ ] Modal to edit and add to a SQL Table div: 
    - Table name
    - Variable
    - Data type

### Completed
- [x] Add movable div to screen
- [x] Add button to spawn a new div

### Bugs
- [ ] Movable divs go outside the bounds of the browser window **when minimizing windows**
