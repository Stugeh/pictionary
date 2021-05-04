import React, {useState} from 'react';
import './App.css';
import MainMenu from './components/MainMenu/MainMenu';
import GameSetup from './components/GameSetup/GameSetup';

//
// App Component function.
// Stores the state of the app and renders the different views.
//
const App = () => {
  // State variables
  const [gameView, setGameView] = useState('mainMenu');
  const [activeMode, setActiveMode] = useState('singlePlayer');
  const [settings, setSettings] = useState({});

  console.log('settings :>> ', settings);
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
      </div>
    </div>
  );
};

export default App;
