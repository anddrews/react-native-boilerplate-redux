import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from '../reducers/rootReducer';

const middlewares = [thunk];
const enhancer = composeWithDevTools(
  {

  },
)(applyMiddleware(...middlewares));

export default function configureStore(initialState) {
  return createStore(RootReducer, initialState, enhancer);
}

