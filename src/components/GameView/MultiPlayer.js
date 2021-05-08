/* eslint-disable no-unused-vars */
import React from 'react';
import {ReactPainter} from 'react-painter';

import {useRound} from '../../hooks/roundHook';

import TopBar from './TopBar';

const MultiPlayer = () => {
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
      {/* <TopBar round={round} setRound={setRound} /> */}
      <div className='canvas'>
        <ReactPainter
          height={1}
          width={1}
          render={({canvas}) => (
            <div>{canvas}</div>
          )}
        />
      </div>
    </div>
  );
};

export default MultiPlayer;
