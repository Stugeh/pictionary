const reducer = (state={variant: 'preWordList', visible: true}, action) => {
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
    case 'SP_WIN_POPUP':
      return {...state, variant: 'spWin', visible: true};
    case 'SP_NO_WIN_POPUP':
      return {...state, variant: 'spNoWin', visible: true};
    case 'SP_GAME_OVER_POPUP':
      return {...state, variant: 'spGameOver', visible: true};
    default: return state;
  }
};

export const initPopup = () => {
  return (dispatch) => {
    dispatch({type: 'INIT_POPUPS'});
  };
};

export const spPopupWin = () => {
  return (dispatch) => {
    dispatch({type: 'SP_WIN_POPUP'});
  };
};

export const spPopupNoWin = () => {
  return (dispatch) => {
    dispatch({type: 'SP_NO_WIN_POPUP'});
  };
};

export const spPopupGameOver = () => {
  return (dispatch) => {
    dispatch({type: 'SP_GAME_OVER_POPUP'});
  };
};

export const popupNoWin = () => {
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
