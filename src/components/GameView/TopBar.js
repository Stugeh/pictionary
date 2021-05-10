// Header row within a Game. will contain the timer,
// and the _ _ _ _ _ representation of the word to guess.
import React from 'react';
import {CountdownCircleTimer} from 'react-countdown-circle-timer';

const TopBar = ({round, setRound, settings, start, stop}) => {
  return (
    <div className='topBar'>
      <span className='roundTimer'>
        <CountdownCircleTimer
          isPlaying={round.inProgress}
          duration={settings.roundTimer}
          size={70}
          colors={[['#009000', 0.33], ['#006000', 0.33], ['#A30000']]}
        >
          <b style={{fontSize: 30}}>{round.roundTimer}</b>
        </CountdownCircleTimer>
      </span>
      <div className='visibleWord'>
        {round.visible.map((char) => `${char} `)}
      </div>
    </div>
  );
};

export default TopBar;
