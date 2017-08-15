//  This component will build our task list

const React = require('react');
const Task = require('Task');

const TaskList = React.createClass({
  // build jsx for each task
  renderTasks: function(tasks){
    return tasks.map((task)=>{
      return (<Task key={task.id} taskData={task} handleCompleteTask={this.props.handleCompleteTask} />);
    });
  },
  render: function(){
    let taskContent = this.renderTasks(this.props.tasks);
    return (
      <div>
        {taskContent}
      </div>
    )
  }
});

module.exports = TaskList;
