// Header row within a Game. will contain the timer,
// and the _ _ _ _ _ representation of the word to guess.
import React from 'react';
import {Button} from '@material-ui/core';
import {CountdownCircleTimer} from 'react-countdown-circle-timer';

const TopBar = ({round, setRound, settings, start, stop}) => {
  console.log('round :>> ', round);
  return (
    <div className='topBar'>
      <CountdownCircleTimer
        onComplete={()=>[true, 1]}
        isPlaying={round.inProgress}
        duration={settings.roundTimer}
        size={70}
        colors={[['#009000', 0.33], ['#006000', 0.33], ['#A30000']]}
      >
        <b style={{fontSize: 30}}>{round.roundTimer}</b>
      </CountdownCircleTimer>
      <Button onClick ={ () => start()}>start</Button>
      <Button onClick ={ () => stop()}>stop</Button>
      <span>
        {round.visible.map((char) => char)}
      </span>
    </div>
  );
};

export default TopBar;
