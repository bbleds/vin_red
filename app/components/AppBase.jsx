// load 3rd party deps
import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

// load our components
import TaskList from 'TaskList';
import AddTask from 'AddTask';
import SearchTasks from "SearchTasks";
import TaskApi from 'TaskApi';

const AppBase = React.createClass({
  getInitialState: () => {
    // get existing tasks
    let tasks = TaskApi.getTasks();

    // set our inital app state
    return {
      tasks: tasks,
      showCompletedTasks: false,
      searchText: ""
    }
  },
  componentDidUpdate: function(){
    // store existing tasks
    TaskApi.setTasks(this.state.tasks);
  },
  render: function(){

    return (
      <div>
        <h1 className="page-title">Task Manager</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <SearchTasks />
              <TaskList/>
              <AddTask/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = AppBase;
