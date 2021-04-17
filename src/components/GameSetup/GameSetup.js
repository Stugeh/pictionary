import React from 'react';

import ModeToggle from '../ModeToggle';

const GameSetup = ({setGameView, setActiveMode, activeMode}) => {
  return (
    <div className='gameSetup'>
      <h1>
        {activeMode.toUpperCase()}
        <ModeToggle
          setActiveMode={setActiveMode}
          activeMode={activeMode}
        />
      </h1>
    </div>
  );
};

export default GameSetup;
