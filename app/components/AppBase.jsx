const React = require('react');
const TaskList = require('TaskList');
const AddTask = require('AddTask');
const SearchTasks = require('SearchTasks');

const AppBase = React.createClass({
  getInitialState: () => {
    // set our inital app state
    return {
      tasks: [
        {
          id: 1,
          text : 'Do something'
        },
        {
          id: 2,
          text : 'Do something else'
        }
      ],
      showCompletedTasks: false,
      searchText: ""
    }
  },
  handleAddTask: (taskText) => {
    console.log('new task', taskText);
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
