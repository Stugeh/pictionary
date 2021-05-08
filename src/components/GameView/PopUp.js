import React from 'react';

import PreWordList from './popups/PreWordList';
import WordList from './popups/WordList';
import Winner from './popups/Winner';
import NoWinner from './popups/NoWinner';

import {Card} from '@material-ui/core';

const PopUp = ({popupVariant, setPopupVariant, playerList, drawer}) => {
  const variables = {playerList, drawer, setPopupVariant};

  console.log('popupVariant :>> ', popupVariant);
  return (
    <Card>
      {popupVariant === 'preWordList' ?
        <PreWordList {...variables}/> : null}

      {popupVariant === 'wordList' ?
         <WordList {...variables} /> : console.log(null)}

      {popupVariant === 'winner' ?
        <Winner {...variables}/> : null}

      {popupVariant === 'noWinner' ?
       <NoWinner {...variables}/> : null}
    </Card>
  );
};

export default PopUp;
