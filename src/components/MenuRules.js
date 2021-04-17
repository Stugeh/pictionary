import React from 'react';
import {Paper, Divider} from '@material-ui/core';

const SinglePlayerRules = () => (
  <ol>
    <li>
      One person gets shown a list of words while other players look away
    </li>
    <li>
      That person then draws the word while other players attempt to guess it
    </li>
    <li>
      when the correct word is guessed the drawer clicks the correct button next
      to the guessers name
    </li>
  </ol>
);

const MultiPlayerRules = () => (
  <ul>
    <li>
      Player gets
    </li>
  </ul>
);

const MenuRules = ({activeMode}) => {
  const paperStyle ={
    width: '30%',
    marginLeft: '35%',
    marginTop: '10px',
  };

  return (
    <Paper elevation={24} variant='outlined' style={paperStyle}>
      <h3>{activeMode.toUpperCase()}</h3>
      <Divider />
      {activeMode === 'singlePlayer' ? <SinglePlayerRules/> : <></>}
      {activeMode === 'multiPlayer' ? <MultiPlayerRules/> : <></>}
    </Paper>
  );
};

export default MenuRules;
