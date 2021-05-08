import React from 'react';

import PreWordList from './popups/PreWordList';
import WordList from './popups/WordList';
import Winner from './popups/Winner';
import NoWinner from './popups/NoWinner';

import {Card, CardContent} from '@material-ui/core';

const PopUp = (props) => {
  const popupVariant = props.popupVariant;
  return (
    <Card>
      <CardContent style={{height: '100%'}}>
        {popupVariant === 'preWordList' ?
        <PreWordList {...props} /> : null}

        {popupVariant === 'wordList' ?
         <WordList {...props} /> : null}

        {popupVariant === 'winner' ?
        <Winner {...props}/> : null}

        {popupVariant === 'noWinner' ?
       <NoWinner {...props}/> : null}
      </CardContent>
    </Card>
  );
};

export default PopUp;
