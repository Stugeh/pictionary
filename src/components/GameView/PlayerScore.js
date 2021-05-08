import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import {ListItem, ListItemIcon, ListItemText, Button} from '@material-ui/core';

const PlayerScore = ({player}) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Button
          color='primary'
          variant='contained'
          style={{color: 'black', backgroundColor: 'red', marginRight: '10px'}}
        >
          <CheckIcon />
        </Button>
      </ListItemIcon>
      <ListItemText primary={player.name} />
      <ListItemText
        primary={`score: ${player.score}`}
        style={{textAlign: 'right'}}/>
    </ListItem>
  );
};

export default PlayerScore;
