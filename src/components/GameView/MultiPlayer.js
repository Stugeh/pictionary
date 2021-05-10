/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {ReactPainter} from 'react-painter';
import {connect} from 'react-redux';

import {useRound} from '../../hooks/roundHook';
import {initGame} from '../../reducers/multiplayerReducer';
import TopBar from './TopBar';
import PopUp from './PopUp';
import SideBar from './SideBar';

const MultiPlayer = (props) => {
  /** preWordList, wordList, winner, noWinner */
  const [popupVariant, setPopupVariant] = useState('preWordList');
  const [popupOpen, setPopupOpen] = useState(true);

  console.log('state :>> ', props);
  const TEST_SETTINGS = {
    letterTimer: 99,
    roundTimer: 5,
    roundCount: 999,
    playerList: [
      {name: 'asd', score: 0},
      {name: 'gggg', score: 0},
      {name: 'yyrterdv', score: 0},
    ],
  };

  console.log(`props.initGame`, props.initGame);
  props.initGame(TEST_SETTINGS);


  const playerList= TEST_SETTINGS.playerList;

  // const {round} = useRound(TEST_SETTINGS);

  return (
    <div className='gameGrid'>
      {/* <TopBar/>
      {!round.inProgress ?
          <div className='popUp'>
            <PopUp/>
          </div> : null}
      <div className='canvas'>
        <ReactPainter
          height={3000}
          width={3000}
          render={({canvas}) => (
            <span>{canvas}</span>
          )}
        />
      </div>
      <SideBar playerList={TEST_SETTINGS.playerList}/> */}
    </div>
  );
};

const mapStateToProps = (state) => ({game: state.game});
const mapDispatchToProps = {
  initGame: () => ({type: 'INIT_MULTI'}),
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiPlayer);
