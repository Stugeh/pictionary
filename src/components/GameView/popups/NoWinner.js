import React from 'react';
import {connect} from 'react-redux';

import {Button} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {nextRound} from '../../../reducers/multiplayerReducer';
import {popupPreWordList} from '../../../reducers/popupReducer';

const NoWinner = ({nextRound, popupPreWordList}) => {
  const handleNextRound = () => {
    nextRound();
    popupPreWordList();
  };

  return (
    <div>
      <h1>Noone guessed the word in time :(</h1>
      <Button
        variant='contained'
        onClick={handleNextRound}
        style={{
          width: '98%',
          color: 'white',
          backgroundColor: 'green',
          fontSize: '20px',
        }}
      >
        <h3>Next round</h3>
        <NavigateNextIcon/>
        <NavigateNextIcon/>
      </Button>
    </div>
  );
};

const mapDispatchToProps = {nextRound, popupPreWordList};

export default connect(null, mapDispatchToProps)(NoWinner);
