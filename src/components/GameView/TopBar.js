// Header row within a Game. will contain the timer,
// and the _ _ _ _ _ representation of the word to guess.
import React from 'react';
import {connect} from 'react-redux';
import {CountdownCircleTimer} from 'react-countdown-circle-timer';

const TopBar = ({game}) => {
  return (
    <div className='topBar'>
      <span className='roundTimer'>
        <CountdownCircleTimer
          isPlaying={game.roundInProgress}
          duration={game.settings.roundTimer}
          size={70}
          colors={[['#009000', 0.33], ['#006000', 0.33], ['#A30000']]}
        >
          <b style={{fontSize: 30}}>{game.timeLeft.round}</b>
        </CountdownCircleTimer>
      </span>
      <div className='visibleWord'>
        {game.visibleWord.map((char) => `${char} `)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({game: state.multiplayer});

export default connect(mapStateToProps)(TopBar);
