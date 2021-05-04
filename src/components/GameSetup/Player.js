import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';

const Player = ({player}) => {
  return (
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon/>
      </ListItemIcon>
      <ListItemText primary={player.name} />
    </ListItem>
  );
};

export default Player;
