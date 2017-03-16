import { combineReducers } from 'redux';
import MyProgLangsReducer from './reducer_myproglangs'

const rootReducer = combineReducers({
  myproglangs: MyProgLangsReducer
});

export default rootReducer;
