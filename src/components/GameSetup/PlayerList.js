import React from 'react';
import Player from './Player';
import {List} from '@material-ui/core';

const PlayerList = ({playerList}) => (
  <List className='playerList'>
    <h2>Player List</h2>
    {playerList.length < 1 ? <i>add some players</i> : null}
    {playerList.map((player) => (
      <Player key={player.name} player={player}/>
    ))}
  </List>
);

export default PlayerList;
