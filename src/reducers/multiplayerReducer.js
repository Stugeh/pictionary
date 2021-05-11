const SETTINGS_INITIAL = {
  letterTimer: 10,
  roundTimer: 90,
  roundCount: 100,
  playerList: [
    {name: 'Tuukka', score: 0},
    {name: 'Joku muu', score: 0},
    {name: 'joku kolmas', score: 0},
  ],
};

const INITIAL_STATE = {
  currentDrawer: 0,
  roundInProgress: false,
  currentRound: 0,
  currentWord: '',
  visibleWord: [],
  playerList: [],
  roundWinner: '',
  timeLeft: {
    round: 90,
    letter: 15,
  },
  settings: {
    roundCount: 50,
    roundTimer: 90,
    letterTimer: 15,
  },
};


const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INIT_MULTI':
      return action.data;

    case 'DECREMENT_TIMERS_MULTI':
      return {...state, timeLeft: action.data};

    case 'REVEAL_WORD_MULTI':
      return {...state, visibleWord: state.currentWord.split('')};

    case 'REVEAL_LETTER_MULTI':
      return {...state, visibleWord: action.data};

    case 'END_ROUND_MULTI':
      return {...state, roundInProgress: false, roundWinner: action.data};

    case 'START_ROUND_MULTI':
      return {...state, roundInProgress: true};

    case 'SELECT_WORD':
      return {
        ...state,
        visibleWord: action.data.visibleWord,
        currentWord: action.data.currentWord,
      };

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

    default: return state;
  }
};

/* Action creators */

export const selectWord = (word) => {
  return (dispatch) => {
    const visible = new Array(word.length).fill('_');
    dispatch({
      type: 'SELECT_WORD',
      data: {visibleWord: visible, currentWord: word},
    });
  };
};

export const decrementTimers = (round, letter) => {
  return (dispatch) => {
    const updatedTimers = {round: round-1, letter: letter-1};
    dispatch({type: 'DECREMENT_TIMERS_MULTI', data: updatedTimers});
  };
};

export const nextRound = () => {
  return (dispatch) => {
    dispatch({type: 'NEXT_ROUND_MULTI'});
  };
};

export const startRound = () => {
  return (dispatch) => {
    dispatch({type: 'START_ROUND_MULTI'});
  };
};

export const endRound = (winner) => {
  return (dispatch) => {
    dispatch({type: 'END_ROUND_MULTI', data: winner});
  };
};

export const revealWord = () => {
  return (dispatch) => {
    dispatch({type: 'REVEAL_WORD_MULTI'});
  };
};

export const revealLetter = (visible, word) => {
  return (dispatch) => {
    const availableIndexes = [];
    const i = visible.indexOf('_');
    while (i != -1) {
      availableIndexes.push(i);
      i = visible.indexOf('_', i + 1);
    }
    if (availableIndexes.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableIndexes.length);
      const newVisible = [
        ...visible,
        visible[randomIndex] = word[randomIndex],
      ];
      dispatch({type: 'REVEAL_LETTER_MULTI', data: newVisible});
    }
  };
};

export const initGame = (settings=SETTINGS_INITIAL) => {
  return (dispatch) => {
    console.log('settings :>> ', settings);
    const newGame = {
      currentDrawer: 0,
      roundInProgress: false,
      currentRound: 0,
      currentWord: '',
      visibleWord: [],
      playerList: settings.playerList,
      roundWinner: '',
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
};

export default reducer;
