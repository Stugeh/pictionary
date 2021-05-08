import React from 'react';
import {List} from '@material-ui/core';

const WordList = ({wordList, setWordList}) => {
  return (
    <List style={{height: '215px'}}>
      {wordList.map((word)=>(
        <h3 key={word}>
          {word}
        </h3>
      ))}
    </List>
  );
};

export default WordList;
