// Header row within a Game. will contain the timer,
// and the _ _ _ _ _ representation of the word to guess.
import React from 'react';
import {connect} from 'react-redux';
import {useInterval} from 'use-interval';
import {ProgressBar} from 'react-progressbar-fancy';

import {Button} from '@material-ui/core';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {switchViewMenu} from '../../reducers/menuReducer';
import {popupNoWin} from '../../reducers/popupReducer';
import {
  revealWord, revealLetter, decrementTimers, resetLetterTimer, endRound,
} from '../../reducers/multiplayerReducer';

const TopBar = (props) => {
  const {game, popupNoWin, revealWord, endRound, switchViewMenu,
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
      <div className='timers'>
        <span className='roundTimer'>
          <b>{`${game.timeLeft.round} seconds`}</b>
          <ProgressBar
            hideText
            score={game.timeLeft.round/game.settings.roundTimer*100}
          />
        </span>
        <b>{`Round ${game.currentRound}/${game.settings.roundCount}`}</b>
      </div>
      <div className='visibleWord'>
        {game.word.map((letter) => letter.visible ? `${letter.char} `: '_ ')}
      </div>
      <div className='exit'>
        <Button
          className='exit-button'
          variant='contained'
          color='secondary'
          onClick={switchViewMenu}
        >
          Exit game
          <ExitToAppIcon/>
        </Button>
      </div>
    </div>
  );
};

// redux is awesome
const mapStateToProps = (state) => ({
  game: state.menu.view==='multiplayer' ?
    state.multiplayer : state.singleplayer,
});

const mapDispatchToProps = {
  popupNoWin, revealWord, decrementTimers, revealLetter,
  resetLetterTimer, endRound, switchViewMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
