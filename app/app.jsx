const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const {Provider} = require('react-redux');

// require core app component
const AppBase = require('AppBase');

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

// Any component (or child components) passed to provider will be able to access the store and dispatch actions.
ReactDOM.render(
  <Provider store={store}>
    <AppBase/>
  </Provider>,
  document.getElementById('app')
);
