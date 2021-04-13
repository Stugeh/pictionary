import React, {useState} from 'react';
import './App.css';
import MainMenu from './MainMenu';

//
// App Component function.
// Stores the state of the app and renders the different views.
//
const App = () => {
  // State variables
  const [gameView, setGameView] = useState('mainMenu');
  const [activeMode, setActiveMode] = useState('singlePlayer');

  return (
    <div>
      <div className='gameWindow'>
        {gameView === 'mainMenu' ? (
          <MainMenu
            setGameView={setGameView}
            setActiveMode={setActiveMode}
            activeMode={activeMode}
          />
        ):<></>
        }
      </div>
    </div>
  );
};

export default App;
