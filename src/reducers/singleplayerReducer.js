const DEV_STATE = {
  roundInProgress: false,
  currentRound: 1,
  word: [],
  picture: '',
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
  // TODO make this not hard coded
  board: [
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
  ],
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

    case 'REVEAL_WORD_SINGLE':
      const revealedWord = state.word
          .map((letter) => ({...letter, visible: true}));
      return {...state, word: revealedWord};

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

    case 'END_ROUND_SINGLE':
      return {...state, roundInProgress: false, roundWinner: action.data};

    case 'START_ROUND_SINGLE':
      return {...state, roundInProgress: true};

    case 'SELECT_PICTURE':
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
      // TODO make this not hard coded
      board: [
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
      ],
    };
    dispatch({type: 'INIT_MULTI', data: newGame});
  };
};


export default reducer;
