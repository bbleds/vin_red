const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const {Provider} = require('react-redux');

// require core app component
const AppBase = require('AppBase');

// load in task api
import TaskApi from 'TaskApi';

// load our store
const actions = require('actions');

let initialState = {tasks: TaskApi.getTasks()}
const store = require('configureStore').configure(initialState);

let unsubscribe = store.subscribe(()=>{
  console.log('tasks are', store.getState());
  localStorage.setItem('tasks', JSON.stringify(store.getState().tasks));
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
