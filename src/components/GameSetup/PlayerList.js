import React from 'react';
import Player from './Player';
import {List} from '@material-ui/core';

const PlayerList = ({playerList}) => (
  <List>
    {playerList.map((player) => (
      <Player key={player.name} player={player}/>
    ))}
  </List>
);

export default PlayerList;
