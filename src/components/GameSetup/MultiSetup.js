/* eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/
import React, {useState} from 'react';
import Player from './Player';
import {useField} from '../../hooks/formHook';

import {TextField, Button} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const MultiSetup = ({/* setGameView,setActiveMode,activeMode*/setSettings}) => {
  const [playerList, setPlayerList] = useState([]);
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
    <span className='settings'>
      <div style={{textAlign: 'center'}}>

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

      <div className='playerList'>
        {playerList.map((player) => (
          <Player key={player.name} player={player}/>
        ))}
      </div>

    </span>
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

