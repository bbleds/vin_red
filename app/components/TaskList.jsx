// load 3rd party deps
import React from 'react';
import {connect} from 'react-redux'; // this is the connecting point to react-redux "Provider" seen in app.jsx
import TaskApi from 'TaskApi';

// load our components
import Task from 'Task';

export const TaskList = React.createClass({
  // build jsx for each task
  renderTasks: function(){
    let state = this.props;
    let tasks = TaskApi.getTasks();
    let filteredTasks = TaskApi.filterTasks(tasks, this.props.showCompletedTasks, this.props.searchText);
    filteredTasks = filteredTasks.map((task)=>{
      return (<Task key={task.id} taskData={task} />);
    });

    return !(filteredTasks.length) ? (<div className='task-list'><p className="empty">No Current Tasks</p></div>) : filteredTasks;
  },
  render: function(){
    // let taskContent = (!this.props.tasks.length) ? (<div className='task-list'><p className="empty">No Current Tasks</p></div>) : this.renderTasks();
    let taskContent = this.renderTasks();
    return (
      <div className="task-list">
        {taskContent}
      </div>
    )
  }
});

// we are essentially setting props here to be based on the provider state. state.tasks = props.tasks
export default connect(
  (state) => {
    return state;
  }
)(TaskList);
