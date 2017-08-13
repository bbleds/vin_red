const React = require('react');
const Task = require('task');

const TaskList = React.createClass({
  getInitialState: () => {
    // set our inital app state
    return {
    }
  },
  // build jsx for each task
  renderTasks: (tasks)=>{
    return tasks.map((task)=>{
      return (<Task taskData={task}/>);
    });
  },
  render: function(){
    console.log('here in render');
    let taskContent = this.renderTasks(this.props.tasks);
    return (
      <div>
        {taskContent}
      </div>
    )
  }
});

module.exports = TaskList;
