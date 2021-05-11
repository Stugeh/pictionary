import React from 'react';
import {connect} from 'react-redux';
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
