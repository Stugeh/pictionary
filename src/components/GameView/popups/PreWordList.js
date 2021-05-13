import React from 'react';
import {connect} from 'react-redux';

import {Divider, Button} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {popupWordList} from '../../../reducers/popupReducer';
import {initMenu} from '../../../reducers/menuReducer';


const GameOver = ({playerList, initMenu}) => {
  const sortedPlayerList = playerList.sort((a, b) => b.score - a.score);
  return (
    <div>
      <h1>Game Over</h1>
      <h3>leaderboard</h3>
      <Divider/>
      {sortedPlayerList
          .map((player) => (
            <h4 key={player.name}>
              {`${player.name}: ${player.score}`}
            </h4>),
          )
      }
      <Button
        variant='contained'
        onClick={initMenu}
        style={buttonStyle}
      >
        End game
        <ExitToAppIcon style={{paddingLeft: '10px'}}/>
      </Button>
    </div>
  );
};

const WordListReveal = ({playerList, drawer, popupWordList}) => (
  <div>
    <h2>
        Everyone look away while {playerList[drawer].name} chooses
        a word to draw
    </h2>
    <Divider/>
    <Button
      variant='contained'
      onClick={popupWordList}
      style={buttonStyle}
    >
      <VisibilityIcon style={{paddingRight: '10px'}}/>
        Reveal
    </Button>
  </div>
);

const PreWordList = ({
  playerList, drawer, gameOver, popupWordList, initMenu,
}) => {
  return (
    <div style={{padding: '20px'}}>
      {gameOver ?
        <GameOver
          playerList={playerList}
          initMenu={initMenu}
        /> :
        <WordListReveal
          playerList={playerList}
          drawer={drawer}
          gameOver={gameOver}
          popupWordList={popupWordList}
        />
      }
    </div>
  );
};

const buttonStyle = {
  width: '98%',
  color: 'white',
  backgroundColor: 'green',
  fontSize: '20px',
};

const mapStateToProps = (state) => ({
  playerList: state.multiplayer.playerList,
  drawer: state.multiplayer.currentDrawer,
  gameOver: state.multiplayer.currentRound ===
            state.multiplayer.settings.roundCount + 1,
});

const mapDispatchToProps = {popupWordList, initMenu};
export default connect(mapStateToProps, mapDispatchToProps)(PreWordList);
