/**
 * Author: Suman Kunwar <sumn2u@gmail.com>
 * Redux store and middlewares
 */
import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

/**
 * History of choice
 * Browser history is used in this case
 */
const history = createBrowserHistory();

/**
 * Middlewares for redux
 * For intercepting and dispatching navigation actions
 */
const historyMiddleware = routerMiddleware(history);
const middlewares = applyMiddleware(thunk, historyMiddleware);
const store = createStore(
  connectRouter(history)(rootReducer),
  composeWithDevTools(middlewares),
);

export { history };
export default store;
