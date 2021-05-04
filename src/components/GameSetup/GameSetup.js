import React from 'react';

import ModeToggle from '../ModeToggle';
import SingleSetup from './SingleSetup';
import MultiSetup from './MultiSetup';


const GameSetup = ({setGameView, setActiveMode, activeMode, setSettings}) => {
  return (
    <div className='gameSetup'>

      <h1 className='setupHeader'>
        {activeMode.toUpperCase()}
        <ModeToggle setActiveMode={setActiveMode} activeMode={activeMode} />
      </h1>

      {activeMode === 'singlePlayer' ?
        <SingleSetup setSettings={setSettings} setGameView={setGameView}/>:null}

      {activeMode === 'multiPlayer' ?
        <MultiSetup setSettings={setSettings} setGameView={setGameView}/>:null}

    </div>
  );
};

export default GameSetup;
