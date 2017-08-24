const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

// load component we are going to test
const {Task} = require('Task');

describe('Task', () => {
  it('Should exist', () =>{
    expect(Task).toExist();
  });

  it('Should dispatch TOGGLE_TASK action', () =>{
    let testTaskId = 19;
    let taskData = {
      id: testTaskId,
      text: 'testing',
      completed: false
    }

    let spy = expect.createSpy();
    // create task component with props defined in our variable (each key value pair is handled via the spread operator)
    let task = TestUtils.renderIntoDocument(<Task key={taskData.id} taskData={taskData} dispatch={spy} />);
    // grab our radio button input
    let $elem = $(ReactDOM.findDOMNode(task)).find('.completed-input')[0];
    // simulate a click
    TestUtils.Simulate.click($elem);

    expect(spy).toHaveBeenCalledWith({
      type : "TOGGLE_TASK",
      taskId: taskData.id
    });
  });
});
