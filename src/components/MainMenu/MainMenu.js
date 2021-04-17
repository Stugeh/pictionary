import React, {useState} from 'react';
// Material UI button component. Material UI docs at https://material-ui.com/components/buttons/
import {Button} from '@material-ui/core';
// Material UI icons
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PersonIcon from '@material-ui/icons/Person';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';

// Title logo at the top of the screen
import logo from '../../assets/title.png';

import MenuRules from './MenuRules';

//
// MainMenu Component.
// The smaller pieces will eventully be moved to their
// own component functions in other files.
//
const MainMenu = ({setGameView, setActiveMode, activeMode}) => {
  // State variables that will not require the game to rerender
  // anything else but the component they are in.
  // ie. the main menu in this case.
  const [singlePlayerButton, setSinglePlayerButton] = useState('contained');
  const [multiPlayerButton, setMultiPlayerButton] = useState('outlined');

  const playButtonStyle = {
    paddingLeft: '50px',
    paddingRight: '50px',
    backgroundColor: 'green',
    fontSize: '50px',
    marginTop: '50px',
  };

  // Changes the radio button colours and switches active gamemode
  const handleRadio = () => {
    const temp = singlePlayerButton;
    setSinglePlayerButton(multiPlayerButton);
    setMultiPlayerButton(temp);
    if (activeMode === 'multiPlayer') {
      setActiveMode('singlePlayer');
    } else {
      setActiveMode('multiPlayer');
    };
  };

  return (
    <div className='mainMenu'>
      <img src={logo} alt="Pictionary" width='400'/>
      <br/>
      <Button
        variant='contained'
        color='primary'
        style={playButtonStyle}
        onClick={() => setGameView('gameSetup')}
      >
        <PlayArrowIcon fontSize='large'/>
        Play
      </Button>
      <br/>
      <div className='radioButtons'>
        <Button
          variant={singlePlayerButton}
          color='primary'
          onClick={handleRadio}
        >
          <PersonIcon fontSize='large'/>
        </Button>

        <Button
          variant={multiPlayerButton}
          color='primary'
          onClick={handleRadio}
        >
          <PeopleAltSharpIcon fontSize='large'/>
        </Button>
        <MenuRules activeMode={activeMode}/>
      </div>
    </div>
  );
};

export default MainMenu;

