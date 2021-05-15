import randomWords from 'random-words';
import {popupWin} from './popupReducer';

const INITIAL_STATE = {
  currentDrawer: 0,
  roundInProgress: false,
  currentRound: 1,
  word: [],
  wordList: [],
  playerList: [],
  roundWinner: '',
  timeLeft: {
    round: 0,
    letter: 0,
  },
  paletteVisible: false,
  brushSize: 1,
  brushColor: '#444',
  settings: {
    roundCount: 0,
    roundTimer: 0,
    letterTimer: 0,
  },
};


const reducer = (state = INITIAL_STATE, action) => {
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
      const revealedWord = state.word
          .map((letter) => ({...letter, visible: true}));
      return {...state, word: revealedWord};

    // TODO make this more efficient
    case 'REVEAL_LETTER_MULTI':
      // save all indexes where the character is hidden to array
      const availableIdxs = state.word
          .map((letter, index) => (!letter.visible ? index : null));
      // choose a random index within that array
      const randIdx = Math.floor(Math.random() * availableIdxs.length);
      // index of the letter to reveal
      const idxToShow = availableIdxs[randIdx];
      // map the updated array to a new word array
      const newWord = state.word
          .map((letter, index) => index===idxToShow ?
            {...letter, visible: true} : letter);
      // return updated state
      return {...state, word: newWord};

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
        word: action.data.word,
      };

    case 'UPDATE_PLAYER_LIST':
      return {...state, playerList: action.data};

    case 'UPDATE_WORD_LIST':
      return {...state, wordList: action.data};

    case 'UPDATE_BRUSH_SIZE':
      return {...state, brushSize: action.data};

    case 'UPDATE_BRUSH_COLOR':
      return {...state, brushColor: action.data};

    case 'NEXT_ROUND_MULTI':
      // increment current drawer and round, reset timers.
      const updatedState = {
        ...state,
        currentDrawer:
          state.currentDrawer === state.playerList.length - 1 ?
            0 : state.currentDrawer + 1,
        timeLeft: {
          round: state.settings.roundTimer,
          letter: state.settings.letterTimer,
        },
        currentRound: state.currentRound + 1,
      };
      return updatedState;

    case 'TOGGLE_PALETTE':
      return {...state, paletteVisible: !state.paletteVisible};

    case 'ROUND_WINNER_MULTI':
      // if player name matches action.data the map returns player with
      // updated score
      const updatedPlayerList = state.playerList
          .map((player) => (action.data === player.name ?
            {...player, score: player.score + state.timeLeft.round * 100,
            } : player
          ));
      // return state with an updated player list and round winner
      return {...state, playerList: updatedPlayerList, winner: action.data};

    default: return state;
  }
};

/* Action creators */

export const selectWord = (word) => {
  return (dispatch) => {
    const newWord = word
        .split('')
        .map((char) => ({char: char, visible: false}));
    dispatch({
      type: 'SELECT_WORD',
      data: {word: newWord},
    });
  };
};

export const updateBrushSize = (size) => {
  return (dispatch) => {
    dispatch({type: 'UPDATE_BRUSH_SIZE', data: size});
  };
};

export const updateBrushColor = (color) => {
  return (dispatch) => {
    dispatch({type: 'UPDATE_BRUSH_COLOR', data: color});
  };
};

export const togglePalette = () => {
  return (dispatch) => {
    dispatch({type: 'TOGGLE_PALETTE'});
  };
};

export const setRoundWinner = (name) => {
  return (dispatch) => {
    dispatch({type: 'ROUND_WINNER_MULTI', data: name});
    dispatch(endRound());
    dispatch(popupWin());
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
    dispatch(revealWord());
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

export const revealLetter = (word) => {
  return (dispatch) => {
    dispatch({type: 'REVEAL_LETTER_MULTI'});
  };
};


export const initGame = (settings) => {
  return (dispatch) => {
    const newGame = {
      currentDrawer: 0,
      roundInProgress: false,
      currentRound: 1,
      paletteVisible: false,
      brushSize: 1,
      brushColor: '#444',
      word: [],
      wordList: [],
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
