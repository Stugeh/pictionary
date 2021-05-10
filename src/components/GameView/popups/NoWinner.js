import React from 'react';
import {Button} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const NoWinner = ({setPopupVariant}) => {
  return (
    <div>
      <h1>Noone guessed the word in time :(</h1>
      <Button
        variant='contained'
        onClick={() => setPopupVariant('preWordList')}
        style={{
          width: '98%',
          color: 'white',
          backgroundColor: 'green',
          fontSize: '20px',
        }}
      >
        <h3>Next round</h3>
        <NavigateNextIcon/>
        <NavigateNextIcon/>
      </Button>
    </div>
  );
};

export default NoWinner;
