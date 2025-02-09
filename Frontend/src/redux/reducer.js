// src/redux/reducer.js
import { TOGGLE_SIDEBAR, TOGGLE_SEARCHBAR, TOGGLE_MODE, LOGIN_STATE } from "./actions";

const initialState = {
  isOpen: true,
  isDay: true,
  isLogin: false,
  userData: {},
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case TOGGLE_SEARCHBAR:
      return {
        ...state,
        isOpen: true,
      };
    case TOGGLE_MODE:
      return {
        ...state,
        isDay: !state.isDay,
      };
    default:
      return state;
  }
};

const loginReducer = (state=initialState, action) => {
  switch (action.type) {
    case LOGIN_STATE:
      if(action.payload===null){
        return {
          ...state,
          isLogin: false,
          userData: {},
        }
      }
      return {
        ...state,
        isLogin: !!action.payload,
        userData: action.payload || {},
      }
    default:
      return state;
  }
};

export {sidebarReducer,loginReducer};
