import React from 'react';
import {connect} from 'react-redux';

import {Button} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {nextRound} from '../../../reducers/multiplayerReducer';
import {popupPreWordList} from '../../../reducers/popupReducer';

const Winner = ({nextRound, popupPreWordList, winner, points}) => {
  const handleNextRound = () => {
    nextRound();
    popupPreWordList();
  };
  return (
    <div>
      <h1>{winner} won that round and got +{points} points!</h1>
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

const mapStateToProps = (state) => ({
  winner: state.multiplayer.winner,
  points: state.multiplayer.timeLeft.round * 100,
});

const mapDispatchToProps = {nextRound, popupPreWordList};

export default connect(mapStateToProps, mapDispatchToProps)(Winner);
