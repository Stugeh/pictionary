import React, {useState} from 'react';
import './App.css';
import MainMenu from './components/MainMenu/MainMenu';
import GameSetup from './components/GameSetup/GameSetup';
import MultiPlayer from './components/GameView/MultiPlayer';

//
// App Component function.
// Stores the state of the app and renders the different views.
//
const App = () => {
  // State variables
  const [gameView, setGameView] = useState('multiPlayer');
  const [activeMode, setActiveMode] = useState('singlePlayer');
  const [settings, setSettings] = useState({});

  return (
    <div>
      <div className='gameWindow'>
        {gameView === 'mainMenu' ? (
          <MainMenu
            setGameView={setGameView}
            setActiveMode={setActiveMode}
            activeMode={activeMode}
          />
        ):null}

        {gameView === 'gameSetup' ? (
          <GameSetup
            setGameView={setGameView}
            setActiveMode={setActiveMode}
            activeMode={activeMode}
            setSettings={setSettings}
          />
        ):null}

        {gameView === 'multiPlayer' ? (
          <MultiPlayer
            setGameView={setGameView}
            setActiveMode={setActiveMode}
            activeMode={activeMode}
            settings={settings}
          />
        ):null}
      </div>
    </div>
  );
};

export default App;
