/* eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/
import React from 'react';
import {connect} from 'react-redux';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {TextField, Button, InputAdornment} from '@material-ui/core';

import {useField} from '../../hooks/formHook';
import {switchViewMP} from '../../reducers/menuReducer';
import {initGame, updatePlayerList} from '../../reducers/multiplayerReducer';

const MultiSetup = ({playerList, updatePlayerList, initGame, switchViewMP}) => {
  const {
    reset: roundTimerReset, ...roundTimer} = useField('number', 'seconds');
  const {
    reset: letterTimerReset, ...letterTimer} = useField('number', 'seconds');
  const {
    reset: roundCountReset, ...roundCount} = useField('number', 'rounds');
  const {
    reset: playerEntryReset, ...playerEntry} = useField('text', 'nickname');

  // if any setting fields are left empty or game
  // has less than 2 players returns false
  const gameIsReady = () => {
    const inputs = [roundTimer.value, letterTimer.value, roundCount.value];
    if (inputs.includes('')) return false;
    if (playerList.length < 2) return false;
    return true;
  };

  const addPlayer = (e) => {
    e.preventDefault();
    if (!playerList.some((player) => player.name === playerEntry.value)) {
      const newPlayer = {name: playerEntry.value, score: 0};
      updatePlayerList([...playerList, newPlayer]);
    } else {
      // TODO notification that player already exists
    }
    playerEntryReset();
  };

  const startGame = () => {
    const newSettings = {
      letterTimer: parseInt(letterTimer.value),
      roundTimer: parseInt(roundTimer.value),
      roundCount: parseInt(roundCount.value),
      playerList,
    };
    initGame(newSettings);
    switchViewMP();
  };

  return (
    <div className='settings' style={{textAlign: 'center'}}>

      <form onSubmit={addPlayer} >
        <h3>Enter some players</h3>
        <TextField
          error={playerList.length < 2}
          variant='outlined'
          helperText='input players to the game'
          {...playerEntry}
        />
        <Button
          className='playerSubmit'
          variant='contained'
          color='primary'
          type='submit'
        >
            Submit
        </Button>
      </form>

      <form style={{paddingTop: '2%'}}>
        <h3>Round timer</h3>
        <TextField
          error={roundTimer.value === '' }
          variant='outlined'
          endAdornment={
            <InputAdornment position="end">Seconds</InputAdornment>
          }
          helperText='How long the players have to guess a word.'
          {...roundTimer}
        />

        <h3>Letter reveal timer</h3>
        <TextField
          error={letterTimer.value === '' }
          variant='outlined'
          endAdornment={
            <InputAdornment position="end">Seconds</InputAdornment>
          }
          helperText='Time between revealing a new letter.'
          {...letterTimer}
        />

        <h3>Round Count</h3>
        <TextField
          error={roundCount.value === '' }
          variant='outlined'
          {...roundCount}
          helperText='How many drawings until game ends.'
        />

        <div className='play'>
          <Button
            variant='contained'
            style={gameIsReady() ? playButtonStyle : disabledButton}
            color='primary'
            onClick={() => gameIsReady() ? startGame() : null}
          >
            Play
            <PlayArrowIcon style={{fontSize: '50px'}}/>
          </Button>
        </div>
      </form>
    </div>
  );
};

const playButtonStyle = {
  paddingTop: '0px',
  paddinBottom: '0px',
  paddingLeft: '50px',
  paddingRight: '50px',
  backgroundColor: 'green',
  fontSize: '40px',
  marginTop: '30px',
};

const disabledButton = {
  paddingTop: '0px',
  paddinBottom: '0px',
  paddingLeft: '50px',
  paddingRight: '50px',
  backgroundColor: 'gray',
  fontSize: '40px',
  marginTop: '30px',
};

const mapStateToProps = (state) => ({playerList: state.multiplayer.playerList});
const mapDispatchToProps = (dispatch) => {
  return {
    switchViewMP: () => dispatch(switchViewMP()),
    initGame: (settings) => dispatch(initGame(settings)),
    updatePlayerList: (newList) => dispatch(updatePlayerList(newList)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiSetup);

