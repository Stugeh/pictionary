import randomWords from 'random-words';

// const INITIAL_STATE = {
//   currentDrawer: 0,
//   roundInProgress: false,
//   currentRound: 0,
//   currentWord: '',
//   visibleWord: [],
//   playerList: [],
//   roundWinner: '',
//   timeLeft: {
//     round: 90,
//     letter: 15,
//   },
//   settings: {
//     roundCount: 50,
//     roundTimer: 90,
//     letterTimer: 15,
//   },
// };

const DEV_STATE = {
  currentDrawer: 0,
  roundInProgress: false,
  currentRound: 0,
  currentWord: '',
  visibleWord: [],
  wordList: [],
  playerList: [
    {name: 'tuukka', score: 0},
    {name: 'tuukka2', score: 0},
  ],
  roundWinner: '',
  timeLeft: {
    round: 90,
    letter: 5,
  },
  settings: {
    roundCount: 50,
    roundTimer: 90,
    letterTimer: 5,
  },
};


const reducer = (state = DEV_STATE, action) => {
  switch (action.type) {
    case 'INIT_MULTI':
      return action.data;

    case 'DECREMENT_TIMERS_MULTI':
      return {
        ...state,
        timeLeft: {
          round: state.timeLeft.round -1,
          letter: state.timeLeft.letter -1,
        },
      };

    case 'REVEAL_WORD_MULTI':
      return {...state, visibleWord: state.currentWord.split('')};

    case 'REVEAL_LETTER_MULTI':
      return {...state, visibleWord: action.data};

    case 'END_ROUND_MULTI':
      return {...state, roundInProgress: false, roundWinner: action.data};

    case 'START_ROUND_MULTI':
      return {...state, roundInProgress: true};

    case 'RESET_LETTER_TIMER':
      return {
        ...state,
        timeLeft: {
          ...state.timeLeft,
          letter: state.settings.letterTimer,
        },
      };

    case 'SELECT_WORD':
      return {
        ...state,
        visibleWord: action.data.visibleWord,
        currentWord: action.data.currentWord,
      };

    case 'UPDATE_PLAYER_LIST':
      return {...state, playerList: action.data};

    case 'UPDATE_WORD_LIST':
      return {...state, wordList: action.data};

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

export const updateWordList = () => {
  return (dispatch) => {
    const wordList = randomWords(5);
    dispatch({
      type: 'UPDATE_WORD_LIST',
      data: wordList,
    });
    dispatch(selectWord(wordList[0]));
  };
};

export const decrementTimers = () => {
  return (dispatch) => {
    dispatch({type: 'DECREMENT_TIMERS_MULTI'});
  };
};

export const resetLetterTimer = () => {
  return (dispatch) => {
    dispatch({type: 'RESET_LETTER_TIMER'});
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

export const endRound = (winner='') => {
  return (dispatch) => {
    dispatch({type: 'END_ROUND_MULTI', data: winner});
  };
};

export const revealWord = () => {
  return (dispatch) => {
    dispatch({type: 'REVEAL_WORD_MULTI'});
  };
};

export const updatePlayerList = (newPlayerList) => {
  return (dispatch) => {
    dispatch({type: 'UPDATE_PLAYER_LIST', data: newPlayerList});
  };
};

export const revealLetter = (visible, word) => {
  return (dispatch) => {
    let availableIndexes = [];
    let i = visible.indexOf('_');
    while (i != -1) {
      availableIndexes = availableIndexes.concat(i);
      i = visible.indexOf('_', i + 1);
    }
    console.log(availableIndexes);
    if (availableIndexes.length > 0) {
      const rng = Math.floor(Math.random() * availableIndexes.length);
      const randomIndex = availableIndexes.pop(rng);
      const newVisible = [
        ...visible,
        visible[randomIndex] = word[randomIndex],
      ];
      dispatch({type: 'REVEAL_LETTER_MULTI', data: newVisible});
    }
  };
};

export const initGame = (settings) => {
  return (dispatch) => {
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
