import React, {useState} from 'react';
import Player from './Player';
import {useField} from '../../hooks/formHook';

import {TextField, Button} from '@material-ui/core';


const MultiSetup = ({setGameView, setActiveMode, activeMode}) => {
  const [playerList, setPlayerList] = useState([]);
  const {
    reset: playerEntryReset,
    ...playerEntry
  } = useField('text', 'nickname');

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

  return (
    <span className='settings'>
      <div style={{paddingLeft: '10%'}}>
        <form onSubmit={addPlayer} >
          <TextField {...playerEntry}/>
          <Button variant='contained' color='primary' type='submit'>
            Submit
          </Button>
        </form>
        setting1
        setting2
      </div>

      <div className='playerList'>
        {playerList.map((player) => (
          <Player key={player.name} player={player}/>
        ))}
      </div>

    </span>
  );
};

export default MultiSetup;

