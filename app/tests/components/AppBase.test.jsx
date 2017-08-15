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

  it('Should toggle completed value when handleCompleteTask is called', () =>{
    let taskText = 'testing';
    let taskApp = TestUtils.renderIntoDocument(<AppBase/>);
    let taskTestId = 11;
    let testTask = {
      'id':taskTestId,
      'text':taskText,
      'completed':false
    };

    // set up a test task
    taskApp.setState({tasks:[testTask]});

    // check that "completed" value false to start
    expect(taskApp.state.tasks[0].completed).toBe(false);

    // simulate a "task completed" action
    taskApp.handleCompleteTask(taskTestId);

    // check that "completed" value was changed
    expect(taskApp.state.tasks[0].completed).toBe(true);
  });
});
