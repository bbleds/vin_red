import uuid from 'node-uuid';
import moment from 'moment';


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
    task: {
      id : uuid(),
      text: text,
      completed: false,
      dateModified: moment().unix()
    }
  }
}

// action generator for showing completed tasks
export let toggleCompletedTasks = (show) => {
  return {
    type: "TOGGLE_COMPLETED_TASKS",
    show: show
  }
}

// action generator for toggling completed status of a task
export let toggleTask = (taskId) => {
  return {
    type: "TOGGLE_TASK",
    taskId: taskId
  }
}

export default {
  addTask: addTask,
  setSearchText: setSearchText,
  toggleCompletedTasks: toggleCompletedTasks,
  toggleTask: toggleTask
}
