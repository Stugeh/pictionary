const INITIAL_STATE = {view: 'mainMenu', activeMode: 'singlePlayer'};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INIT_MENU':
      return INITIAL_STATE;
    case 'MODE_SWITCH':
      const newMode =
        state.activeMode==='singlePlayer' ? 'multiPlayer' : 'singlePlayer';
      return {...state, activeMode: newMode};

    case 'VIEW_MAIN_MENU':
      return {...state, view: 'mainMenu'};

    case 'VIEW_SETUP':
      return {...state, view: 'setup'};

    case 'VIEW_MULTIPLAYER':
      return {...state, view: 'multiplayer'};

    case 'VIEW_SINGLEPLAYER':
      return {...state, view: 'singlePlayer'};

    default: return state;
  }
};

export const initMenu = () => {
  return (dispatch) => {
    dispatch({
      type: 'INIT_MENU',
    });
  };
};

export const switchMode = () => {
  return (dispatch) => {
    dispatch({
      type: 'MODE_SWITCH',
    });
  };
};

export const switchViewMenu = () => {
  return (dispatch) => {
    dispatch({
      type: 'VIEW_MAIN_MENU',
    });
  };
};

export const switchViewSetup = () => {
  return (dispatch) => {
    dispatch({
      type: 'VIEW_SETUP',
    });
  };
};

export const switchViewMP = () => {
  return (dispatch) => {
    dispatch({
      type: 'VIEW_MULTIPLAYER',
    });
  };
};

export const switchViewSP = () => {
  return (dispatch) => {
    dispatch({
      type: 'VIEW_SINGLEPLAYER',
    });
  };
};

export default reducer;
