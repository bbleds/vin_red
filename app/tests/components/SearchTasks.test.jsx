const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

// load component we are going to test
const SearchTasks = require('SearchTasks');

describe('SearchTasks', () => {
  it('Should exist', () =>{
    expect(SearchTasks).toExist();
  });

  it('Should call search prop with valid search text data', () =>{
    let testText = 'test search';
    let spy = expect.createSpy();

    // pass in our spy function that should be called
    let searchTasks = TestUtils.renderIntoDocument(< SearchTasks search={spy} />);

    // grab component
    let $elem = $(ReactDOM.findDOMNode(searchTasks));

    // set value of the input
    searchTasks.refs.searchInput.value = testText;

    // Simulate a change on DOM node
    TestUtils.Simulate.change(searchTasks.refs.searchInput);

    // verify that our method was called with the test text
    expect(spy).toHaveBeenCalledWith(testText, false);
  });

  it('Should call search prop when "showCompleted" is toggled', () =>{
    let spy = expect.createSpy();

    // pass in our spy function that should be called
    let searchTasks = TestUtils.renderIntoDocument(< SearchTasks search={spy} />);

    // grab component
    let $elem = $(ReactDOM.findDOMNode(searchTasks));

    // set value of the input
    searchTasks.refs.showCompleted.checked = true;

    // Simulate a change on DOM node
    TestUtils.Simulate.change(searchTasks.refs.showCompleted);

    // verify that our method was called with the test text
    expect(spy).toHaveBeenCalledWith('', true);
  });

});
