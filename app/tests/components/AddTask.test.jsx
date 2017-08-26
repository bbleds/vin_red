const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

// load component we are going to test
// const AddTask = require('AddTask');
import AddTaskConnected from "AddTask";
import {Provider} from "react-redux";
import {configure} from "configureStore";

describe('AddTask', () => {
  it('Should exist', () =>{
    expect(AddTaskConnected).toExist();
  });

  it('Should render addTask component', () =>{
    let store = configure();

    // render the components that we are going to be checking in this
    let provider = TestUtils.renderIntoDocument(<Provider store={store}><AddTaskConnected/></Provider>);
    let addTaskComponents = TestUtils.scryRenderedComponentsWithType(provider, AddTaskConnected);

    expect(addTaskComponents.length).toEqual(1);
  });

  // it('Should call ADD_TASK action', () =>{
  //   let spy = expect.createSpy();
  //   let addTaskComponent = TestUtils.renderIntoDocument(<AddTaskConnected dispatch={spy}/>);
  //
  //   // grab our radio button input
  //   let $elem = $(ReactDOM.findDOMNode(task)).find('.completed-input')[0];
  //
  // });
});
