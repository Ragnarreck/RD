import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const reducer = combineReducers({});
export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);
