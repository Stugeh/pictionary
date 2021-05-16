import {spPopupWin} from './popupReducer';

const INITIAL_BOARD = [
  [
    {visible: true}, {visible: true}, {visible: true},
    {visible: true}, {visible: true},
  ],
  [{visible: true}, {visible: true}, {visible: true},
    {visible: true}, {visible: true},
  ],
  [{visible: true}, {visible: true}, {visible: true},
    {visible: true}, {visible: true},
  ],
  [{visible: true}, {visible: true}, {visible: true},
    {visible: true}, {visible: true},
  ],
  [{visible: true}, {visible: true}, {visible: true},
    {visible: true}, {visible: true},
  ],
];

const PICTURES = [
  {
    word: 'giraffe',
    image: './giraffe.jpg',
  },
  {
    word: 'puuhöylä',
    image: './puuhoyla.jpg',
  },
  {
    word: 'tree',
    image: './tree.png',
  },
];

const DEV_STATE = {
  roundInProgress: false,
  currentRound: 1,
  word: [],
  guesses: [],
  score: 0,
  picture: './puuhoyla.jpg',
  timeLeft: {
    round: 30,
    letter: 5,
    tile: 5,
  },
  settings: {
    roundCount: 100,
    roundTimer: 30,
    letterTimer: 5,
    tileTimer: 5,
  },
  board: INITIAL_BOARD,
};

const reducer = (state = DEV_STATE, action) => {
  switch (action.type) {
    case 'INIT_SINGLE':
      return action.data;

    case 'DECREMENT_TIMERS_SINGLE':
      return {
        ...state,
        timeLeft: {
          round: state.timeLeft.round -1,
          letter: state.timeLeft.letter -1,
          tile: state.timeLeft.tile -1,
        },
      };

    case 'ADD_GUESS':
      return {...state, guesses: [...state.guesses, action.data]};

    case 'CLEAR_GUESSES':
      return {...state, guesses: []};

    case 'SP_END_ROUND':
      return {...state, roundInProgress: false};

    case 'SP_START_ROUND':
      return {...state, roundInProgress: true};

    case 'SP_ADD_SCORE':
      return {...state, score: state.score + state.timeLeft.round * 100};

    // TODO make this more efficient
    case 'REVEAL_LETTER_SINGLE':
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

    case 'SELECT_WORD':
      return {
        ...state,
        word: action.data.word,
        picture: action.data.picture,
      };

    case 'NEXT_ROUND_SINGLE':
      // increment current drawer and round, reset timers.
      const updatedState = {
        ...state,
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

export const decrementTimersSP = () => {
  return (dispatch) => {
    dispatch({type: 'DECREMENT_TIMERS_SINGLE'});
  };
};

export const nextRound = () => {
  return (dispatch)=>{
    dispatch({type: 'NEXT_ROUND_SINGLE'});
    dispatch(selectWord());
    dispatch(startRound());
  };
};

export const selectWord = () => {
  return (dispatch) => {
    const newPic = PICTURES[Math.floor(Math.random() * PICTURES.length)];
    const wordArray = newPic.word.split('');
    const finalWordArray = wordArray
        .map((letter) => ({char: letter, visible: false}));

    dispatch({
      type: 'SELECT_WORD',
      data: {picture: newPic.image, word: finalWordArray},
    });
  };
};

export const makeGuess = (text, time) => {
  return (dispatch) => {
    const newGuess = {text, time};
    console.log('newGuess :>> ', newGuess);
    dispatch({type: 'ADD_GUESS', data: newGuess});
  };
};

export const spWinRound = () => {
  return (dispatch) => {
    dispatch(endRound());
    dispatch(addScore());
    dispatch(spPopupWin());
  };
};

export const addScore = () => {
  return (dispatch) => {
    dispatch({type: 'ADD_SCORE'});
  };
};

export const endRound = () => {
  return (dispatch) => {
    dispatch({type: 'CLEAR_GUESSES'});
    dispatch({type: 'SP_END_ROUND'});
  };
};

export const startRound = () => {
  return (dispatch) => {
    dispatch({type: 'SP_START_ROUND'});
  };
};

export const initGame = (settings) => {
  return (dispatch) => {
    const newGame = {
      roundInProgress: false,
      currentRound: 1,
      word: [],
      picture: '',
      timeLeft: {
        round: settings.roundTimer,
        letter: settings.letterTimer,
      },
      settings: {
        roundCount: settings.roundCount,
        roundTimer: settings.roundTimer,
        letterTimer: settings.letterTimer,
        tileTimer: settings.tileTimer,
      },
      board: INITIAL_BOARD,
    };
    dispatch({type: 'INIT_MULTI', data: newGame});
  };
};


export default reducer;
