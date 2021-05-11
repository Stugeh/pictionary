import React from 'react';
import {connect} from 'react-redux';

import DeleteIcon from '@material-ui/icons/Delete';
import {ListItem, ListItemIcon, ListItemText, Button} from '@material-ui/core';

import {updatePlayerList} from '../../reducers/multiplayerReducer';

const Player = ({name, updatePlayerList, playerList}) => {
  const deletePlayer = () => {
    const newList = playerList.filter((player) => player.name !== name);
    updatePlayerList(newList);
  };
  return (
    <ListItem>
      <ListItemIcon>
        <Button
          onClick={deletePlayer}
          color='primary'
          variant='contained'
          style={{color: 'black', backgroundColor: 'red', marginRight: '10px'}}
        >
          <DeleteIcon />
        </Button>
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};


const mapStateToProps = (state) => ({playerList: state.multiplayer.playerList});
const mapDispatchToProps = (dispatch) => {
  return {
    updatePlayerList: (newList) => dispatch(updatePlayerList(newList)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
