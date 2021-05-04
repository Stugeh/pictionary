import React, {useState} from 'react';

import ModeToggle from '../ModeToggle';
import SingleSettings from './SingleSettings';
import MultiSettings from './MultiSettings';
import PlayerList from './PlayerList';


const GameSetup = ({setGameView, setActiveMode, activeMode, setSettings}) => {
  const [playerList, setPlayerList] = useState([]);
  return (
    <div className='gameSetup'>

      <h1 className='setupHeader'>
        {activeMode.toUpperCase()}
        <ModeToggle setActiveMode={setActiveMode} activeMode={activeMode} />
      </h1>

      {activeMode === 'singlePlayer' ?
        <SingleSettings
          setSettings={setSettings}
          setGameView={setGameView}
        />:null}

      {activeMode === 'multiPlayer' ?
        <MultiSettings
          setSettings={setSettings}
          setGameView={setGameView}
          setPlayerList={setPlayerList}
          playerList={playerList}
        />:null}

      <PlayerList className='playerList' playerList={playerList}/>

    </div>
  );
};

export default GameSetup;
