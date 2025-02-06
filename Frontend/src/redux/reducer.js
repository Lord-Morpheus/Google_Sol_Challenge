// src/redux/reducer.js
import { TOGGLE_SIDEBAR } from './actions';
import { TOGGLE_SEARCHBAR } from './actions';

const initialState = {
  isOpen: true,
  // isSearchOpen: false,
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
    default:
      return state;
  }
};

export default sidebarReducer;
