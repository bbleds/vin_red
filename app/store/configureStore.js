import * as redux from 'redux';

// load in reducers
import {searchTextReducer, showCompletedReducer, tasksReducer} from 'reducers';

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
