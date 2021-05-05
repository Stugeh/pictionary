import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {ListItem, ListItemIcon, ListItemText, Button} from '@material-ui/core';

const Player = ({player, deletePlayer}) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Button
          onClick={() => deletePlayer(player)}
          color='primary'
          variant='contained'
          style={{color: 'black', backgroundColor: 'red', marginRight: '10px'}}
        >
          <DeleteIcon />
        </Button>
      </ListItemIcon>
      <ListItemText primary={player.name} />
    </ListItem>
  );
};

export default Player;
