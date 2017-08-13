const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

// load component we are going to test
const AddTask = require('AddTask');

describe('AddTask', () => {
  it('Should exist', () =>{
    expect(AddTask).toExist();
  });

  it('Should call addTask prop with valid data', () =>{
    let spy = expect.createSpy();

    // pass in our spy function that should be called
    let addTask = TestUtils.renderIntoDocument(< AddTask addTask={spy} />);

    // grab component
    let $elem = $(ReactDOM.findDOMNode(addTask));

    // set value of the input
    addTask.refs.taskInput.value = "test";

    // Simulate a button click on DOM node
    TestUtils.Simulate.click($elem.find('a')[0]);

    // verify that our method was called with the test text
    expect(spy).toHaveBeenCalledWith('test');
  });
});
