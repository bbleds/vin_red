const React = require('react');
const ReactDom = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

// load component we are going to test
const TaskList = require('TaskList');
const Task = require('Task');

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
        test: 'test data one'
      },
      {
        id: 2,
        test: 'test data two'
      }
    ];

    let taskList = TestUtils.renderIntoDocument(<TaskList tasks={tasks} />);
    let taskComponents = TestUtils.scryRenderedComponentsWithType(taskList, Task);
    
    expect(taskComponents.length).toBe(tasks.length);

  });
});
