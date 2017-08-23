//  This component will build our task list

// load 3rd party deps
const React = require('react');
const {connect} = require('react-redux'); // this is the connecting point to react-redux "Provider" seen in app.jsx

// load our components
const Task = require('Task');

const TaskList = React.createClass({
  // build jsx for each task
  renderTasks: function(tasks){
    return tasks.map((task)=>{
      return (<Task key={task.id} taskData={task} />);
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

// we are essentially setting props here to be based on the provider state. state.tasks = props.tasks
module.exports = connect(
  (state) => {
    return {
      tasks: state.tasks
    }
  }
)(TaskList);
