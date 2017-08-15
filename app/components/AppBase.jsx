const React = require('react');
const TaskList = require('TaskList');
const AddTask = require('AddTask');
const SearchTasks = require('SearchTasks');
const uuid = require('node-uuid');

const AppBase = React.createClass({
  getInitialState: () => {
    // set our inital app state
    return {
      tasks: [],
      showCompletedTasks: false,
      searchText: ""
    }
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
    // set tasks to pass to child components
    let {tasks} = this.state;

    return (
      <div>
        <SearchTasks search={this.handleSearchTask} />
        <TaskList tasks={tasks} handleCompleteTask={this.handleCompleteTask}/>
        <AddTask addTask={this.handleAddTask}/>
      </div>
    )
  }
});

module.exports = AppBase;
