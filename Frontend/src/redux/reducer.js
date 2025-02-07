// src/redux/reducer.js
import { TOGGLE_SIDEBAR } from "./actions";
import { TOGGLE_SEARCHBAR } from "./actions";
import { TOGGLE_MODE } from "./actions";

const initialState = {
  isOpen: true,
  isDay: true,
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

export default sidebarReducer;
