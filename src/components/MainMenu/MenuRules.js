import React from 'react';
import {connect} from 'react-redux';

import {Paper, Divider} from '@material-ui/core';


const MenuRules = (props) => {
  return (
    <Paper elevation={24} variant='outlined' style={paperStyle}>
      <h3>{props.activeMode.toUpperCase()}</h3>
      <Divider />
      {props.activeMode === 'singlePlayer' ? <SinglePlayerRules/> : null}
      {props.activeMode === 'multiPlayer' ? <MultiPlayerRules/> : null}
    </Paper>
  );
};

const paperStyle ={
  width: '30%',
  marginLeft: '35%',
  marginTop: '10px',
};

const SinglePlayerRules = () => (
  <ol>
    <li>Player is shown a grid that hides a picture underneath.</li>
    <li>
      The players objective is to guess what the object in the photo is.
      They do this by typing in words into the chat box on the left of the
      screen.
    </li>
    <li>Periodically tiles are removed revealing more of the picture.</li>
  </ol>
);

const MultiPlayerRules = () => (
  <ol>
    <li>
      One person gets shown a list of words while other players look away.
    </li>
    <li>
      That person then draws the word while other players attempt to guess it.
    </li>
    <li>
      when the correct word is guessed the drawer clicks the correct button next
      to the guessers name.
    </li>
  </ol>
);

const mapStateToProps = (state) => ({activeMode: state.menu.activeMode});


export default connect(mapStateToProps)(MenuRules);
