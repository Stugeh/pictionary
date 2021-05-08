import React from 'react';

import PreWordList from './popups/PreWordList';
import WordList from './popups/PreWordList';
import Winner from './popups/Winner';
import NoWinner from './popups/NoWinner';

import {Card} from '@material-ui/core';

const PopUp = ({popupVariant, setPopupVariant, playerList, drawer}) => {
  /** preWordList, wordList, winner, noWinner */
  return (
    <Card>
      {popupVariant === 'preWordList' ?
      <PreWordList playerList={playerList} drawer={drawer}/> : null}
      {popupVariant === 'WordList' ?
      <WordList playerList={playerList} drawer={drawer}/> : null}
      {popupVariant === 'Winner' ?
      <Winner playerList={playerList} drawer={drawer}/> : null}
      {popupVariant === 'noWinner' ?
       <NoWinner playerList={playerList} drawer={drawer}/> : null}
    </Card>
  );
};

export default PopUp;
