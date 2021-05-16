import React from 'react';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';

import {switchViewSP} from '../../reducers/menuReducer';

const SingleSetup = ({switchViewSP}) => {
  return (
    <div className='settings'>
      <h1>
        This game mode is unfinished and buggy.
         But the ui itself is mostly done.
         multiplayer is finished.
      </h1>
      <Button
        onClick={() => {
          switchViewSP();
        }}
        variant='contained'
        style={playButtonStyle}
        color='primary'
      >
        To the game
      </Button>
    </div>
  );
};

const playButtonStyle = {
  paddingTop: '0px',
  paddingBottom: '0px',
  paddingLeft: '50px',
  paddingRight: '50px',
  backgroundColor: 'green',
  fontSize: '40px',
  marginTop: '30px',
};

export default connect(null, {switchViewSP})(SingleSetup);

