import uuid from 'node-uuid';
import moment from 'moment';
import actions from 'actions';

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
      return action.show;
    default:
      return state;
  }
}

// handle tasks interaction
export let tasksReducer = (state=[], action) => {
  switch (action.type) {
    // When a task is added
    case "ADD_TASK":
      return [
        ...state,
        action.task
      ];
    // When a task is toggled complete
    case "TOGGLE_TASK":
      return state.map((task)=>{
        if(task.id == action.taskId){
          let taskCopy = {...task};
          taskCopy.completed = !taskCopy.completed;
          return taskCopy
        }

        return task;
      });
    default:
      return state;
  }
}
