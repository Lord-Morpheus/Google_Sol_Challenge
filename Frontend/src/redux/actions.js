// src/redux/actions.js
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const TOGGLE_SEARCHBAR = 'TOGGLE_SEARCHBAR';

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});

export const toggleSearchbar = () => ({
  type: TOGGLE_SEARCHBAR,
});
