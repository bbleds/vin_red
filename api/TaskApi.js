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

  // returns existing tasks based on search term
  filterTasks: function(tasks, showCompleted, searchTerm){
    let filteredTasks = tasks;

    // filter by showCompleted and search terms
    filteredTasks = filteredTasks.filter((item)=>{
      if((!item.completed || showCompleted) && item.text.toLowerCase().match(searchTerm.toLowerCase())){
        return true;
      }
    });

    // sort to show incomplete tasks at top
    filteredTasks.sort((a,b)=>{
      if(!a.completed && b.completed){
        return -1;
      } else if(a.completed && !b.completed){
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTasks;
  }
};
