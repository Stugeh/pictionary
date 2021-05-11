import './App.css';
import React from 'react';
import {connect} from 'react-redux';

import {initMenu} from './reducers/menuReducer';

import MainMenu from './components/MainMenu/MainMenu';
import GameSetup from './components/GameSetup/GameSetup';
import MultiPlayer from './components/GameView/MultiPlayer';

//
// App Component function.
// Stores the state of the app and renders the different views.
//
const App = ({view}) => {
  return (
    <div>
      <div className='gameWindow'>
        {view === 'mainMenu' ? <MainMenu/> : null}

        {view === 'setup' ? <GameSetup/> : null}

        {view === 'multiplayer' ? <MultiPlayer/> : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({view: state.menu.view});

export default connect(mapStateToProps, {initMenu})(App);
