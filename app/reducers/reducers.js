const actions = require('actions');

// handle search text properties
export let searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return action.searchText
    default:
      return state;
  }
}

// handle completed task properties
export let showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_COMPLETED_TASKS":
      return !state;
    default:
      return state;
  }
}
