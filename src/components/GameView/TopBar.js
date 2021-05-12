// Header row within a Game. will contain the timer,
// and the _ _ _ _ _ representation of the word to guess.
import React from 'react';
import {connect} from 'react-redux';
import {useInterval} from 'use-interval';

import {CountdownCircleTimer} from 'react-countdown-circle-timer';

import {popupNoWin} from '../../reducers/popupReducer';
import {
  revealWord, revealLetter, decrementTimers, resetLetterTimer, endRound,
} from '../../reducers/multiplayerReducer';

const TopBar = (props) => {
  const {game, popupNoWin, revealWord, endRound,
    revealLetter, decrementTimers, resetLetterTimer} = props;
  useInterval(() => {
    if (game.roundInProgress) {
      decrementTimers();
      if (game.timeLeft.letter === 0) {
        revealLetter(game.visibleWord, game.currentWord);
        resetLetterTimer();
      }
      if (game.timeLeft.round === 0) {
        popupNoWin();
        revealWord();
        endRound();
      }
    }
  }, 1000);

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
        <b>{`Round ${game.currentRound}/${game.settings.roundCount}`}</b>
      </span>
      <div className='visibleWord'>
        {game.word.map((letter) => letter.visible ? `${letter.char} `: '_ ')}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({game: state.multiplayer});
const mapDispatchToProps = {
  popupNoWin, revealWord,
  decrementTimers, revealLetter, resetLetterTimer, endRound,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
