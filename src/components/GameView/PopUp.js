import React from 'react';
import {connect} from 'react-redux';

import {Card, CardContent} from '@material-ui/core';

import PreWordList from './popups/PreWordList';
import WordList from './popups/WordList';
import Winner from './popups/Winner';
import NoWinner from './popups/NoWinner';


const PopUp = ({popupVariant}) => {
  return (
    <Card className='popUp'>
      <CardContent style={{height: '100%'}}>
        {popupVariant === 'preWordList' ? <PreWordList/> : null}
        {popupVariant === 'wordList' ? <WordList/> : null}
        {popupVariant === 'winner' ? <Winner/> : null}
        {popupVariant === 'noWinner' ? <NoWinner/> : null}
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state) => ({popupVariant: state.popup.variant});

export default connect(mapStateToProps)(PopUp);
