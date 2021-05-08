import React from 'react';
import {Divider, List, ListItem} from '@material-ui/core';

const WordList = ({wordList, setWordList}) => {
  return (
    <div>
      <h1>Select a word to draw</h1>
      <Divider/>
      <List style={{textAlign: 'center'}}>
        {wordList.map((word)=>(
          <ListItem key={word}>
            <h3 style={{margin: 'auto'}}>{word}</h3>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default WordList;
