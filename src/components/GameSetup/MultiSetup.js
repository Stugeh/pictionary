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
    const newPlayer = {playerEntry, score: 0};
    setPlayerList([...playerList, newPlayer]);
    playerEntryReset();
  };

  return (
    <span>
      <div className='settings'>
        <form onSubmit={addPlayer}>
          <TextField {...playerEntry}/>
          <Button variant='contained' color='primary'>
            Submit
          </Button>
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

export default MultiSetup;

