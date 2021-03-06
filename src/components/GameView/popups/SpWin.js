import React from 'react';
import {connect} from 'react-redux';

import {Button} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {nextRound} from '../../../reducers/singleplayerReducer';
import {togglePopup} from '../../../reducers/popupReducer';


const Winner = ({nextRound, togglePopup, points}) => {
  const handleNextRound = () => {
    nextRound();
    togglePopup();
  };
  return (
    <div>
      <h1>You won that round and got +{points} points!</h1>
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
  points: state.singleplayer.timeLeft.round * 100,
});

const mapDispatchToProps = {nextRound, togglePopup};

export default connect(mapStateToProps, mapDispatchToProps)(Winner);
