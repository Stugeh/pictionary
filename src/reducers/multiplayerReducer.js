
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_MULTI':
      return action.data;
    case 'NEXT_ROUND_MULTI':
      const updatedState = {
        ...state,
        currentDrawer:
          currentDrawer === state.playerList.length - 1 ? 0 : currentDrawer + 1,
        timeLeft: {
          round: state.settings.roundTimer,
          letter: state.settings.letterTimer,
        },
        currentRound: state.currentRound + 1,
      };
      return updatedState;
  }
};

/* Action creators */

export const initGame = (settings) => {
  const newGame = {
    currentDrawer: 0,
    roundInProgress: false,
    currentRound: 0,
    currentWord: '',
    visibleWord: [],
    playerList: settings.playerList,
    timeLeft: {
      round: settings.roundTimer,
      letter: settings.letterTimer,
    },
    settings: {
      roundCount: settings.roundCount,
      roundTimer: settings.roundTimer,
      letterTimer: settings.letterTimer,
    },
  };
  dispatch({type: 'INIT_MULTI', data: newGame});
};

export const nextRound = () => {
  dispatch({type: 'NEXT_ROUND_MULTI'});
};

export const decrementTimers = (roundTimer, letterTimer) => {

};

export const revealWord = () => {

};

export const revealLetter = () => {

};

export const endRound = () => {

};

export const startRound = () => {

};

export default reducer;
