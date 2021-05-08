import React from 'react';
import {Paper, List} from '@material-ui/core';

import PlayerScore from './PlayerScore';

const ScoreBoard = ({playerList}) => {
  return (
    <Paper
      className='scores'
      style={{paddingLeft: '10px'}}
      elevation={3}>
      <List >
        <h2>Player List</h2>
        {playerList.length < 1 ?
              <i>add some players</i> :

              playerList.map((player) => (
                <PlayerScore
                  key={player.name}
                  player={player}
                />
              ))
        }

      </List>
    </Paper>
  );
};

export default ScoreBoard;
