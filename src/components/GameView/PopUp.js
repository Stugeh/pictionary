import React from 'react';

import PreWordList from './popups/PreWordList';
import WordList from './popups/PreWordList';
import Winner from './popups/Winner';
import NoWinner from './popups/NoWinner';

import {Card} from '@material-ui/core';

const PopUp = ({popupVariant, setPopupVariant}) => {
  /** preWordList, wordList, winner, noWinner */
  return (
    <Card>
      {popupVariant === 'preWordList' ? <PreWordList/> : null}
      {popupVariant === 'WordList' ? <WordList/> : null}
      {popupVariant === 'Winner' ? <Winner/> : null}
      {popupVariant === 'noWinner' ? <NoWinner/> : null}
    </Card>
  );
};

export default PopUp;
