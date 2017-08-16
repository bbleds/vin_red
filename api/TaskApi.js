// This module will handle getting and setting persistent data
module.exports = {

  // Used to set tasks as persistent data
  // accepts "tasks" array
  setTasks: (tasks) => {

    if(Array.isArray(tasks)){
      // store existing tasks if tasks is array
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return true;
    }

    // fail - don't rely on undefined
    return null;
  },

  // Used to retrieve tasks
  getTasks: () =>{
    let tasks = [];

    try {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    } catch (e){
      // return empty array if there was an error
      return [];
    }

    // run final validation to check that "tasks" is an array
    return (Array.isArray(tasks)) ? tasks : [];
  },

  filterTasks: (tasks, showCompleted, searchTerm) => {

  }
};
