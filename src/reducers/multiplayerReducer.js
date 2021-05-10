
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_MULTIPLAYER':
  }
};

export const initMulti = (settings) => {
  const newGame = {
    currentDrawer: 0,
    roundInProgress: false,
    currentRound: 0,
    currentWord: '',
    visibleWord: [],
    roundCount: settings.roundCount,
    roundTimer: settings.roundTimer,
    letterTimer: settings.letterTimer,
    playerList: settings.playerList,
  };
  dispatch({type: 'INIT_MULTIPLAYER', data: newGame});
};


export default reducer;
