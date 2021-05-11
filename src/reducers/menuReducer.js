const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_MENU':
      return {view: 'mainMenu', activeMode: 'singlePlayer'};

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
  }
};
