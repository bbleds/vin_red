const React = require('react');
const ReactDom = require('react-dom');
const {Provider} = require('react-redux');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

// load component we are going to test
import ConnectedTaskList, {TaskList} from 'TaskList';
import ConnectedTask, {Task} from 'Task';
import {configure} from 'configureStore';

describe('TaskList', () => {
  // Be sure we have our component
  it('Should exist', () =>{
    expect(TaskList).toExist();
  });

  // Check that rendering is successful for each task passed in
  it('Should render one task component for each task', () =>{

    let tasks = [
      {
        id: 1,
        test: 'test data one',
        completed: false,
        dateModified: 500
      },
      {
        id: 2,
        test: 'test data two',
        completed: false,
        dateModified: 600
      }
    ];

    let store = configure({tasks:tasks});
    let provider = TestUtils.renderIntoDocument(<Provider store={store}><ConnectedTaskList /></Provider>);
    let taskList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTaskList)[0];
    let taskComponents = TestUtils.scryRenderedComponentsWithType(taskList, ConnectedTask);

    expect(taskComponents.length).toBe(tasks.length);

  });
});
