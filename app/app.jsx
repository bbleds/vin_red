import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

// load custom modules and components
import AppBase from 'AppBase';
import TaskApi from 'TaskApi';
import actions from 'actions';
import {configure} from 'configureStore';

let initialState = {tasks: TaskApi.getTasks()}
const store = configure(initialState);

let unsubscribe = store.subscribe(()=>{
  // when tasks are updated, we should store them on localStorage
  TaskApi.setTasks(store.getState().tasks);
});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// Any component (or child components) passed to provider will be able to access the store and dispatch actions.
ReactDOM.render(
  <Provider store={store}>
    <AppBase/>
  </Provider>,
  document.getElementById('app')
);
