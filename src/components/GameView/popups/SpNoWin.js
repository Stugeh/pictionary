import React from 'react';
import {connect} from 'react-redux';

import {Button} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {nextRound} from '../../../reducers/singleplayerReducer';
import {togglePopup} from '../../../reducers/popupReducer';

const NoWinner = ({nextRound, togglePopup}) => {
  const handleNextRound = () => {
    nextRound();
    togglePopup();
  };

  return (
    <div>
      <h1>You didn&apos;t quess the word in time :(</h1>
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

const mapDispatchToProps = {nextRound, togglePopup};

export default connect(null, mapDispatchToProps)(NoWinner);
