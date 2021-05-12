import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {Divider, List, ListItem, Button} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CreateIcon from '@material-ui/icons/Create';

import {
  updateWordList, selectWord, startRound,
} from '../../../reducers/multiplayerReducer';

import {togglePopup} from '../../../reducers/popupReducer';


const WordList = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const {updateWordList, selectWord, wordList, togglePopup, startRound} = props;

  useEffect(() => {
    updateWordList();
  }, []);

  const handleWordSelect = (word, index) => {
    selectWord(word);
    setSelectedIndex(index);
  };

  const beginRound = () => {
    togglePopup();
    selectWord(wordList[selectedIndex]);
    startRound();
  };

  return (
    <div>
      <Button
        variant='contained'
        color='primary'
        onClick={updateWordList}
        style={{float: 'right'}}
      >
        <RefreshIcon style={{fontSize: '35px'}}/>
      </Button>
      <h1>
        Select a word to draw
      </h1>
      <Divider/>

      <List style={{textAlign: 'center'}}>
        {wordList.map((word, index)=>(
          <ListItem
            key={word}
            divider={true}
            selected={selectedIndex===index}
            onClick={() => handleWordSelect(word, index)}
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
        onClick={beginRound}
      >
        <h3>Start Drawing</h3>
        <CreateIcon/>
      </Button>
    </div>
  );
};


const mapStateToProps = (state) => ({
  wordList: state.multiplayer.wordList,
});

const mapDispatchToProps = (dispatch) => ({
  updateWordList: () => dispatch(updateWordList()),
  togglePopup: () => dispatch(togglePopup()),
  startRound: () => dispatch(startRound()),
  selectWord: (word) => dispatch(selectWord(word)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WordList);
