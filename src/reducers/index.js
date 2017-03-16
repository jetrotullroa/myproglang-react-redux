import { combineReducers } from 'redux';
import MyProgLangsReducer from './reducer_myproglangs'
import ActiveProgLangReducer from './reducer_active_myproglang'

const rootReducer = combineReducers({
  myproglangs: MyProgLangsReducer,
  activeProglang: ActiveProgLangReducer
});

export default rootReducer;
