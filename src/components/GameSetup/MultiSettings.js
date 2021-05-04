/* eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/
import React from 'react';
import {useField} from '../../hooks/formHook';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {TextField, Button} from '@material-ui/core';

const MultiSetup = ({setSettings, setPlayerList, playerList}) => {
  const {
    reset: roundTimerReset, ...roundTimer} = useField('number', 'seconds');
  const {
    reset: letterTimerReset, ...letterTimer} = useField('number', 'seconds');
  const {
    reset: playerEntryReset, ...playerEntry} = useField('text', 'nickname');

  const addPlayer = (e) => {
    e.preventDefault();
    const newPlayer = {name: playerEntry.value, score: 0};
    if (!playerList.some((player) => player.name === playerEntry.value)) {
      console.log(newPlayer);
      setPlayerList([...playerList, newPlayer]);
    } else {
      // TODO
    }
    playerEntryReset();
  };

  const startGame = (e) => {
    e.preventDefault();
    const newSettings = {
      letterTimer: letterTimer.value,
      roundTimer: roundTimer.value,
      playerList,
    };
    setSettings(newSettings);
  };

  return (
    <div className='settings' style={{textAlign: 'center'}}>

      <form onSubmit={addPlayer} >
        <TextField {...playerEntry}/>
        <Button variant='contained' color='primary' type='submit'>
            Submit
        </Button>
      </form>

      <form onSubmit={startGame} style={{paddingTop: '15%'}}>
        <h3>Round timer</h3>
        <TextField {...roundTimer}/>
        <h3>Letter reveal timer</h3>
        <TextField {...letterTimer}/>
        <div className='play'>
          <Button
            variant='contained'
            style={playButtonStyle}
            color='primary'
            type='submit'
          >
            <PlayArrowIcon fontSize='large'/>
            Play
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

export default MultiSetup;

