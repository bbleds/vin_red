const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

// load component we are going to test
const AppBase = require('AppBase');

describe('AppBase', () => {
  it('Should exist', () =>{
    expect(AppBase).toExist();
  });

  it('Should append a new task to existing task list', () =>{
    let taskText = 'testing';
    let taskApp = TestUtils.renderIntoDocument(<AppBase/>);

    taskApp.setState({tasks:[]});
    taskApp.handleAddTask(taskText);

    expect(taskApp.state.tasks.length).toEqual(1);
  });
});
