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
  it('Should render taskList component', () =>{

    let store = configure();
    let provider = TestUtils.renderIntoDocument(<Provider store={store}><ConnectedTaskList /></Provider>);

    // be sure that we have our TaskList
    expect(TestUtils.scryRenderedComponentsWithType(provider, ConnectedTaskList).length).toBe(1);

  });
});
