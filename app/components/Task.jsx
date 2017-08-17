const React = require('react');

const moment = require('moment');

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
          <span> {moment.unix(taskData.createdOn).format("MM/DD/YYYY @ hh:mm a")}</span>
        </div>
      </div>
    )
  }
});

module.exports = Task;
