const React = require('react');

const moment = require('moment');

const Task = React.createClass({
  // this method will pass the completed tasks to app component
  markTaskComplete: function(){
    this.props.handleCompleteTask(this.props.taskData.id)
  },
  // set and format date from timestamp for output
  setDateMessage: function(task){
    let message = task.completed ? "Completed" : "Created";
    let time = moment.unix(task.dateModified).format("MM/DD/YYYY @ hh:mm a");
    return `${message} ${time}`;
  },
  render: function(){
    let {taskData, handleCompleteTask} = this.props;
    let timeOutput = this.setDateMessage(taskData);
    return (
      <div>
        <div onClick={this.markTaskComplete}>
          <input className="completed-input" type="checkbox" ref="markComplete" checked={taskData.completed} /> {taskData.text}
          <span> {timeOutput}</span>
        </div>
      </div>
    )
  }
});

module.exports = Task;
