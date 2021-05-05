import React from 'react';
import Player from './Player';
import {List, Paper} from '@material-ui/core';

const PlayerList = ({playerList}) => (
  <Paper
    className='playerList'
    style={{height: '80%', paddingLeft: '10px'}}
    elevation={3}>
    <List >
      <h2>Player List</h2>
      {playerList.length < 1 ? <i>add some players</i> : null}
      {playerList.map((player) => (
        <Player key={player.name} player={player}/>
      ))}
    </List>
  </Paper>
);

export default PlayerList;
