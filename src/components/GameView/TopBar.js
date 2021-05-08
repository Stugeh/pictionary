// Header row within a Game. will contain the timer,
// and the _ _ _ _ _ representation of the word to guess.
import React from 'react';
// import {CountDownCircleTimer} from 'react-countdown-circle-timer';

const TopBar = ({round, setRound}) => {
  console.log(`setRound`, setRound);
  setRound({...round, inProgress: true});
  return (
    <div className='topBar'>

      {round.roundTimer}

    </div>
  );
};

export default TopBar;
