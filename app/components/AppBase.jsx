// load 3rd party deps
import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

// load our components
import TaskList from 'TaskList';
import AddTask from 'AddTask';
import SearchTasks from "SearchTasks";

const AppBase = React.createClass({
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
