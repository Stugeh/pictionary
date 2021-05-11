import React from 'react';
import {connect} from 'react-redux';

import Player from './Player';
import {List, Paper} from '@material-ui/core';

const PlayerList = ({playerList}) => {
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
            <Player key={player.name} name={player.name}/>
          ))
        }
      </List>
    </Paper>
  );
};

const mapStateToProps = (state) => ({playerList: state.multiplayer.playerList});
export default connect(mapStateToProps)(PlayerList);
