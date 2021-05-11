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
const App = (props) => {
  return (
    <div>
      <div className='gameWindow'>
        {props.view === 'mainMenu' ? <MainMenu/> : null}

        {props.view === 'gameSetup' ? <GameSetup/> : null}

        {props.view === 'multiPlayer' ? <MultiPlayer/> : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({view: state.menu.view});

export default connect(mapStateToProps, {initMenu})(App);
