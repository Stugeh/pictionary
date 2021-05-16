import React from 'react';
import {connect} from 'react-redux';

import {Button, Divider, TextField} from '@material-ui/core';

import {makeGuess} from '../../reducers/singleplayerReducer';

const GuessBox = ({guesses, time}) => {
  return (
    <div className='guess-container'>
      <h1>Guesses</h1>
      <Divider/>
      <div className='guess-list'>
        {guesses.map((guess) => {
          <div
            className='guess'
            key={`${guess.text}${guess.time}`}
          >
            {guess.text}
          </div>;
        })}
      </div>
      <div className='guess-input'>
        <Divider/>
        <form onSubmit={() => console.log('submit')}>
          <TextField
            variant='outlined'
            label='Make a guess'
            autoFocus={true}
          />
          <Button type='submit' color='primary' variant='contained'>
              Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  guesses: state.singleplayer.guesses,
  time: state.singleplayer.timeLeft.round,
});

const mapDispatchToProps = {
  makeGuess: (text, time) => dispatch(makeGuess(text, time)),
};

export default connect(mapStateToProps, mapDispatchToProps)(GuessBox);
