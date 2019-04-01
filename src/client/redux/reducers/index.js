import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import stringReducer from './string-reducer';
import raspReducer from './rasp-reducer';
//import countriReducer from './countri-reducer';

const reducers = history => combineReducers({
  router: connectRouter(history),
  //app: appReducer,
  string: stringReducer,
  raspisanie: raspReducer,
 // countries: countriReducer
});

export default reducers;
