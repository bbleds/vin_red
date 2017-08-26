const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');
const moment = require('moment');

const configureStore = require('configureStore');

const actions = require('actions');

// load component we are going to test
const AppBase = require('AppBase');
import TaskList from 'TaskList';
const SearchTasks = require('SearchTasks');
const {AddTask} = require('AddTask');

describe('AppBase', () => {
  it('Should exist', () =>{
    expect(AppBase).toExist();
  });

  it('Should render todo list',() => {
    const store = configureStore.configure();
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <AppBase/>
      </Provider>
    );

    let appBase = TestUtils.scryRenderedComponentsWithType(provider, AppBase)[0];
    let taskList = TestUtils.scryRenderedComponentsWithType(appBase, TaskList);

    expect(taskList.length).toEqual(0);
  });

  it('Should render searchTask component',() => {
    const store = configureStore.configure();
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <AppBase/>
      </Provider>
    );

    let appBase = TestUtils.scryRenderedComponentsWithType(provider, AppBase)[0];
    let searchTasks = TestUtils.scryRenderedComponentsWithType(appBase, SearchTasks);

    expect(searchTasks.length).toEqual(1);
  });

  it('Should render addTask component',() => {
    const store = configureStore.configure();
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <AppBase/>
      </Provider>
    );

    let appBase = TestUtils.scryRenderedComponentsWithType(provider, AppBase)[0];
    let addTask = TestUtils.scryRenderedComponentsWithType(appBase, AddTask);

    expect(addTask.length).toEqual(1);
  });

});
