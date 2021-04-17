import React from 'react';

import ModeToggle from '../ModeToggle';

const GameSetup = ({setGameView, setActiveMode, activeMode}) => {
  return (
    <div className='gameSetup'>
      <h1 className='setupHeader'>
        {activeMode.toUpperCase()}
        <ModeToggle
          setActiveMode={setActiveMode}
          activeMode={activeMode}
        />
      </h1>
      <div className='settings'>

      </div>
      <div className='playerList'>

      </div>
    </div>
  );
};

export default GameSetup;
