const redux = require('redux');

// load in reducers
const {searchTextReducer, showCompletedReducer, tasksReducer} = require('reducers');

export let configure = (initialState={}) => {
  // make our final reducer from combining all previous reducers
  let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompletedTasks: showCompletedReducer,
    tasks: tasksReducer
  });

  return redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
