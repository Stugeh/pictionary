/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {ReactPainter} from 'react-painter';

import {useRound} from '../../hooks/roundHook';

import TopBar from './TopBar';
import PopUp from './PopUp';
import SideBar from './SideBar';

const MultiPlayer = () => {
  const [popupOpen, setPopupOpen] = useState(true);
  /** preWordList, wordList, winner, noWinner */
  const [popupVariant, setPopupVariant] = useState('preWordList');

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

  const {nextRound, start, stop, round,
    setRound, selectWord} = useRound(TEST_SETTINGS);

  return (
    <div className='gameGrid'>
      <TopBar round={round} settings={TEST_SETTINGS} start={start} stop={stop}/>
      <div className='popUp'>
        {popupOpen ?
        <PopUp popupVariant={popupVariant} setPopupVariant={setPopupVariant}/> :
        null}
      </div>
      <div className='canvas'>
        <ReactPainter
          height={3000}
          width={3000}
          render={({canvas}) => (
            <span>{canvas}</span>
          )}
        />
      </div>
      <SideBar playerList={TEST_SETTINGS.playerList}/>
    </div>
  );
};

export default MultiPlayer;
