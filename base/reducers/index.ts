import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'base/reducers/history';
import counter from './counter';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter
  });
}
