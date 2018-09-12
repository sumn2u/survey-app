import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
/* import from our reducers */
import survey from './survey';
/* 
* Root Reducers 
*/

const rootReducer = combineReducers({
  routing: routerReducer,
  survey,
});

export default rootReducer;
