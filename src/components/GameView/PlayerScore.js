import React from 'react';
import {connect} from 'react-redux';
import CheckIcon from '@material-ui/icons/Check';
import {ListItem, ListItemIcon, ListItemText, Button} from '@material-ui/core';

import {setRoundWinner} from '../../reducers/multiplayerReducer';

const PlayerScore = ({player, drawer, setRoundWinner}) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Button
          color='primary'
          variant='contained'
          onClick={
            player.name!==drawer ?
              () => setRoundWinner(player.name) : null
          }
          style={{
            backgroundColor: player.name!==drawer ? 'green' : 'gray',
            marginRight: '10px',
          }}
        >
          <CheckIcon />
          correct
        </Button>
      </ListItemIcon>
      <ListItemText primary={player.name} />
      <ListItemText
        primary={`score: ${player.score}`}
        style={{textAlign: 'right'}}/>
    </ListItem>
  );
};

const mapStateToProps = (state) => ({
  drawer: state.multiplayer
      .playerList[state.multiplayer.currentDrawer].name,
});

const mapDispatchToProps = (dispatch) => ({
  setRoundWinner: (name) => dispatch(setRoundWinner(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScore);
