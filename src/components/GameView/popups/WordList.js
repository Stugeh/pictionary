import React, {useState, useEffect} from 'react';
import {Divider, List, ListItem, Button} from '@material-ui/core';
import randomWords from 'random-words';
import RefreshIcon from '@material-ui/icons/Refresh';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CreateIcon from '@material-ui/icons/Create';

const WordList = ({setSelectedWord}) => {
  const [wordList, setWordList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const initWords = randomWords(5);
    setWordList(initWords);
    setSelectedWord(initWords[0]);
  }, []);

  const selectWord = (word, index) => {
    setSelectedWord(word);
    setSelectedIndex(index);
  };

  return (
    <div>
      <h1>
        <Button
          variant='contained'
          color='primary'
          onClick={() => setWordList(randomWords(5))}
        >
          <RefreshIcon style={{fontSize: '35px'}}/>
        </Button>
        Select a word to draw
      </h1>
      <Divider/>

      <List style={{textAlign: 'center'}}>
        {wordList.map((word, index)=>(
          <ListItem
            key={word}
            divider={true}
            selected={selectedIndex===index}
            onClick={() => selectWord(word, index)}
          >
            <h3 style={{margin: 'auto'}}>
              {word}
            </h3>
            {selectedIndex===index ? <CheckCircleIcon/> : null}
          </ListItem>
        ))}
      </List>
      <Button
        variant='contained'
        color='primary'
        style={{backgroundColor: 'green'}}
      >
        <h3>Start Drawing</h3>
        <CreateIcon/>
      </Button>
    </div>
  );
};

export default WordList;
