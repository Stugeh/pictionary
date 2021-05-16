import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {nextRound, initGame} from '../../reducers/singleplayerReducer';

import TopBar from './TopBar';
import Picture from './Picture';
import GuessBox from './GuessBox';
import PopUp from './PopUp';


const Singleplayer = ({game, nextRound, initGame}) => {
  useEffect(() => {
    nextRound();
  }, []);

  return (
    <div className='gameGrid'>
      <TopBar/>
      {!game.roundInProgress ? <PopUp/> : null}
      <Picture/>
      <GuessBox/>
    </div>
  );
};

const mapStateToProps = (state) => ({game: state.singleplayer});

export default connect(mapStateToProps, {nextRound, initGame})(Singleplayer);
