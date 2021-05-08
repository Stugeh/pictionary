import React from 'react';

import {Divider, Button} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

const PreWordList = ({playerList, drawer, setPopupVariant}) => {
  return (
    <div style={{padding: '20px'}}>
      <h2>
        Everyone look away while {playerList[drawer].name} chooses
        a word to draw
      </h2>
      <Divider/>
      <Button
        variant='contained'
        onClick={() => setPopupVariant('wordList')}
        style={{
          width: '98%',
          color: 'white',
          backgroundColor: 'green',
          fontSize: '20px',
        }}
      >
        <VisibilityIcon style={{paddingRight: '10px'}}/>
        Reveal
      </Button>
    </div>
  );
};

export default PreWordList;
