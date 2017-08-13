const React = require('react');
const ReactDom = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

// load component we are going to test
const AppBase = require('AppBase');

describe('AppBase', () => {
  it('Should exist', () =>{
    expect(AppBase).toExist();
  });
});
