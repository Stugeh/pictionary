import React from 'react';
import Player from './Player';
import {List, Paper} from '@material-ui/core';

const PlayerList = ({playerList, setPlayerList}) => {
  const deletePlayer = (player) => {
    const updatedList = playerList.filter((obj) => obj.name !== player.name);
    setPlayerList(updatedList);
  };

  return (
    <Paper
      className='playerList'
      style={{height: '80%', paddingLeft: '10px'}}
      elevation={3}>
      <List >
        <h2>Player List</h2>
        {playerList.length < 1 ?
          <i>add some players</i> :

          playerList.map((player) => (
            <Player
              key={player.name}
              player={player}
              deletePlayer={deletePlayer}
            />
          ))
        }

      </List>
    </Paper>
  );
};

export default PlayerList;
