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
          text: taskText
        }
      ]
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
        <TaskList tasks={tasks}/>
        <AddTask addTask={this.handleAddTask}/>
      </div>
    )
  }
});

module.exports = AppBase;
