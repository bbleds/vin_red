const expect = require('expect');

// freeze is used for testing pure functions - if you run arguments through this, if arguments are mutated, the test will fail
const freeze = require('deep-freeze-strict');

const reducers = require('reducers');

describe("Reducers", () => {

  describe("Search text reducer", () => {
    it('Should return the search text when the SET_SEARCH_TEXT action is run', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: "Testing"
      };
      // pass our arguments through deep freeze first to ensure pure functions -- if any are updated, test will fail
      let resp = reducers.searchTextReducer(freeze(''), freeze(action));
      expect(resp).toEqual(action.searchText);
    })
  });

  describe("Show completed reducer", () => {
    it('Should toggle showCompletedTasks boolean', () => {
      let action = {
        type: 'TOGGLE_COMPLETED_TASKS'
      };
      let resp = reducers.showCompletedReducer(freeze(false), freeze(action));
      expect(resp).toEqual(true);
    })
  });
});
