// load 3rd party deps
const React = require('react');
const uuid = require('node-uuid');

// load our components
const TaskList = require('TaskList');
const AddTask = require('AddTask');
const SearchTasks = require('SearchTasks');
const TaskApi = require('TaskApi');

const AppBase = React.createClass({
  getInitialState: () => {
    // get existing tasks
    let tasks = TaskApi.getTasks();

    // set our inital app state
    return {
      tasks: tasks,
      showCompletedTasks: false,
      searchText: ""
    }
  },
  componentDidUpdate: function(){
    // store existing tasks
    TaskApi.setTasks(this.state.tasks);
  },
  handleAddTask: function(taskText){
    this.setState({
      tasks: [
        // combine previous tasks
        ...this.state.tasks,
        // append new tasks
        {
          id : uuid(),
          text: taskText,
          completed: false
        }
      ]
    });
  },
  handleCompleteTask: function(taskId){
    let tasks = this.state.tasks.map((task)=>{
      // set "completed" status on task we passed back to the opposite "completed" status
      if(task.id == taskId){
        task.completed = !task.completed;
      }

      return task;
    });

    this.setState({
      tasks: tasks
    });
  },
  handleSearchTask: function(searchText, showCompletedTasks){
    this.setState({
      showCompletedTasks: showCompletedTasks,
      searchText: searchText
    });
  },
  render: function(){

    // pull variables from state
    let {tasks, showCompletedTasks, searchText} = this.state;

    // filter tasks by user-entered criteria
    let filteredTasks = TaskApi.filterTasks(tasks, showCompletedTasks, searchText);

    return (
      <div>
        <SearchTasks search={this.handleSearchTask} />
        <TaskList tasks={filteredTasks} handleCompleteTask={this.handleCompleteTask}/>
        <AddTask addTask={this.handleAddTask}/>
      </div>
    )
  }
});

module.exports = AppBase;
