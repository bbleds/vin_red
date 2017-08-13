//  This component will build our task list

const React = require('react');
const Task = require('Task');

const TaskList = React.createClass({
  getInitialState: () => {
    // set our inital app state
    return {
    }
  },
  // build jsx for each task
  renderTasks: (tasks)=>{
    return tasks.map((task)=>{
      return (<Task key={task.id} taskData={task}/>);
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
