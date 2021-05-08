// Header row within a Game. will contain the timer,
// and the _ _ _ _ _ representation of the word to guess.
import React from 'react';
import {Button} from '@material-ui/core';
// import {CountDownCircleTimer} from 'react-countdown-circle-timer';

const TopBar = ({round, setRound}) => {
  return (
    <div className='topBar'>
      <h3>{round.round.roundTimer} seconds</h3>
      <Button onClick ={ () => round.start()}>start</Button>

    </div>
  );
};

export default TopBar;
