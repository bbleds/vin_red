const React = require('react');

const Task = React.createClass({
  // this method will pass the completed tasks to app component
  markTaskComplete: function(){
    this.props.handleCompleteTask(this.props.taskData.id)
  },
  render: function(){
    let {taskData, handleCompleteTask} = this.props;
    return (
      <div>
        <div onClick={this.markTaskComplete}>
          <input className="completed-input" type="checkbox" ref="markComplete" checked={taskData.completed} /> {taskData.text}
        </div>
      </div>
    )
  }
});

module.exports = Task;
