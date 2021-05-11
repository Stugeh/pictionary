const reducer = (state={}, action) => {
  switch (action.type) {
    case 'INIT_POPUPS':
      return {variant: 'preWordList', visible: false};
    case 'NO_WIN_POPUP':
      return {variant: 'noWinner', visible: true};
    case 'WIN_POPUP':
      return {variant: 'winner', visible: true};
    case 'PRE_WORD_LIST':
      return {variant: 'preWordList', visible: true};
    case 'WORDLIST':
      return {variant: 'wordList', visible: true};
    case 'TOGGLE_POPUP':
      return {...state, visible: !state.visible};
    default: return state;
  }
};

export const initPopup = () => {
  return (dispatch) => {
    dispatch({type: 'INIT_POPUPS'});
  };
};

export const popuopNoWin = () => {
  return (dispatch) => {
    dispatch({type: 'NO_WIN_POPUP'});
  };
};

export const popupWin = () => {
  return (dispatch) => {
    dispatch({type: 'WIN_POPUP'});
  };
};

export const popupPreWordList = () => {
  return (dispatch) => {
    dispatch({type: 'PRE_WORD_LIST'});
  };
};

export const popupWordList = () => {
  return (dispatch) => {
    dispatch({type: 'WORDLIST'});
  };
};

export const togglePopup = () => {
  return (dispatch) => {
    dispatch({type: 'TOGGLE_POPUP'});
  };
};

export default reducer;
