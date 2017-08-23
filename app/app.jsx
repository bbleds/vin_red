var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// require core app component
var AppBase = require('AppBase');

// load our store
const actions = require('actions');
const store = require('configureStore').configure();

store.subscribe(() => {
  console.log('new state', store.getState());
});

store.dispatch(actions.setSearchText('testing'));
store.dispatch(actions.addTask('testing'));
store.dispatch(actions.toggleCompletedTasks());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <AppBase/>,
  document.getElementById('app')
);
