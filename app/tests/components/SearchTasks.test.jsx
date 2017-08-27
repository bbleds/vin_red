const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

// load component we are going to test
// const SearchTasks = require('SearchTasks');
import {SearchTasks} from "SearchTasks";
import {Provider} from "react-redux";
import {configure} from "configureStore";

describe('SearchTasks', () => {
  it('Should exist', () =>{
    expect(SearchTasks).toExist();
  });

  it('Should call search prop with valid search text data', () =>{
    let testText = 'test search';
    let spy = expect.createSpy();

    // pass in our spy function that should be called
    let searchTasks = TestUtils.renderIntoDocument(< SearchTasks dispatch={spy} />);

    // grab component
    let $elem = $(ReactDOM.findDOMNode(searchTasks));

    // set value of the input
    searchTasks.refs.searchInput.value = testText;

    // Simulate a change on DOM node
    TestUtils.Simulate.change(searchTasks.refs.searchInput);

    // verify that our method was called with the test text
    expect(spy).toHaveBeenCalledWith({
      type : "SET_SEARCH_TEXT",
      searchText: testText
    });
  });

  it('Should call toggle completed tasks action when "show completed" checkbox is changed', () =>{
    let spy = expect.createSpy();

    // pass in our spy function that should be called
    let searchTasks = TestUtils.renderIntoDocument(< SearchTasks dispatch={spy} />);

    // grab component
    let $elem = $(ReactDOM.findDOMNode(searchTasks));

    // set value of the input
    searchTasks.refs.showCompleted.checked = true;

    // Simulate a change on DOM node
    TestUtils.Simulate.change(searchTasks.refs.showCompleted);

    // verify that our action
    expect(spy).toHaveBeenCalledWith({
      type: "TOGGLE_COMPLETED_TASKS",
      show: true
    });
  });

});
