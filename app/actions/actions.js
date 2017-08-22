const uuid = require('node-uuid');
const moment = require('moment');


// action generator for searching tasks
export let setSearchText = (searchText) => {
  return {
    type: "SET_SEARCH_TEXT",
    searchText: searchText
  }
}

// action generator for adding tasks
export let addTask = (text) => {
  return {
    type: "ADD_TASK",
    text: text
  }
}

// action generator for showing completed tasks
export let toggleCompletedTasks = () => {
  return {
    type: "TOGGLE_COMPLETED_TASKS"
  }
}

// action generator for toggling completed status of a task
export let toggleComplete = (completed) => {
  return {
    type: "TOGGLE_COMPLETE_TASK",
    completed: completed
  }
}
