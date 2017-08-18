//  This component will build our task list

// load 3rd party deps
const React = require('react');

// load our components
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
      <div className="task-list">
        {taskContent}
      </div>
    )
  }
});

module.exports = TaskList;
