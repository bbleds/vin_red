const React = require('react');
const TaskList = require('TaskList');
const AddTask = require('AddTask');

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
      ]
    }
  },
  handleAddTask: (taskText) => {
    console.log('new task', taskText);
  },
  render: function(){
    // set tasks to pass to child components
    let {tasks} = this.state;

    return (
      <div>
        <TaskList tasks={tasks}/>
        <AddTask addTask={this.handleAddTask}/>
      </div>
    )
  }
});

module.exports = AppBase;
