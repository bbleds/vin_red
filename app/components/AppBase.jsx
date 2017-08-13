const React = require('react');
const TaskList = require('TaskList');

const AppBase = React.createClass({
  getInitialState: function(){
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
  render: function(){
    // set tasks to pass to child components
    let {tasks} = this.state;

    return (
      <div>
        <TaskList tasks={tasks}/>
      </div>
    )
  }
});

module.exports = AppBase;
