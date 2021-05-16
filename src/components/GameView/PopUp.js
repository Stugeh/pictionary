import React from 'react';
import {connect} from 'react-redux';

import {Card, CardContent} from '@material-ui/core';

import PreWordList from './popups/PreWordList';
import WordList from './popups/WordList';
import Winner from './popups/Winner';
import NoWinner from './popups/NoWinner';
import SpWin from './popups/SpWin';
import SpNoWin from './popups/SpNoWin';
import SpGameOver from './popups/SpGameOver';

const PopUp = ({popupVariant}) => {
  return (
    <Card className='popUp'>
      <CardContent style={{height: '100%'}}>
        {popupVariant === 'preWordList' ? <PreWordList/> : null}
        {popupVariant === 'wordList' ? <WordList/> : null}
        {popupVariant === 'winner' ? <Winner/> : null}
        {popupVariant === 'noWinner' ? <NoWinner/> : null}
        {popupVariant === 'spWin' ? <SpWin/> : null}
        {popupVariant === 'spNoWin' ? <SpNoWin/> : null}
        {popupVariant === 'spGameOver' ? <SpGameOver/> : null}
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state) => ({popupVariant: state.popup.variant});

export default connect(mapStateToProps)(PopUp);
