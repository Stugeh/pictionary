import React from 'react';
import {connect} from 'react-redux';
import {Button, Divider, TextField} from '@material-ui/core';

import {useField} from '../../hooks/formHook';
import {makeGuess, spWinRound} from '../../reducers/singleplayerReducer';

const GuessBox = ({guesses, time, word, makeGuess, spWinRound}) => {
  const {reset: guessReset, ...guess} = useField('text', 'Make a guess');

  const handleGuess = (e) => {
    e.preventDefault();
    makeGuess(guess.value, time);
    console.log('word :>> ', word);
    word === guess.value ? spWinRound() : null;
    guessReset();
  };

  return (
    <div className='guess-container'>
      <h1>Guesses</h1>
      <Divider/>
      <div className='guesses'>
        {guesses.map((guess) => (
          <div key={`${guess.text}${guess.time}`}>
            <h3>{guess.text}</h3>
            <Divider/>
          </div>
        ))}
      </div>
      <div className='guess-input'>
        <Divider/>
        <form onSubmit={handleGuess}>
          <TextField
            variant='outlined'
            autoFocus={true}
            {...guess}
          />
          <Button
            type='submit'
            color='primary'
            variant='contained'>
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
  word: state.singleplayer.word
      .map((letter) => letter.char.toLowerCase()).join(''),
});

const mapDispatchToProps = (dispatch) => ({
  makeGuess: (text, time) => dispatch(makeGuess(text, time)),
  spWinRound: () => dispatch((spWinRound())),
});

export default connect(mapStateToProps, mapDispatchToProps)(GuessBox);
