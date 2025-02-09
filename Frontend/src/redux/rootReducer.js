// src/redux/rootReducer.js
import { combineReducers } from 'redux';
import {sidebarReducer,loginReducer} from './reducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  login: loginReducer,
});

export default rootReducer;
