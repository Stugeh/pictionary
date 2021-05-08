/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {ReactPainter} from 'react-painter';

import {useRound} from '../../hooks/roundHook';

import TopBar from './TopBar';
import PopUp from './PopUp';
import SideBar from './SideBar';

const MultiPlayer = () => {
  const [popupOpen, setPopupOpen] = useState(true);
  const TEST_SETTINGS = {
    letterTimer: 99,
    roundTimer: 999999999,
    roundCount: 999,
    playerList: [
      {name: 'asd', score: 0},
      {name: 'gggg', score: 0},
      {name: 'yyrterdv', score: 0},
    ],
  };

  const {...round} = useRound(TEST_SETTINGS);
  return (
    <div className='gameGrid'>
      <TopBar round={round} />
      <div className='popUp'>
        {popupOpen ? <PopUp/> : null }
      </div>
      <div className='canvas'>
        <ReactPainter
          height={1}
          width={1}
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
