import { createStore, combineReducers } from 'redux';

import specimenReducer from '../reducers/specimens';
import foodReducer from '../reducers/foods';

const rootReducer = combineReducers({
  specimens: specimenReducer,
  foods: foodReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;