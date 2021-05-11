import React from 'react';
import {connect} from 'react-redux';

// Material UI button component. Material UI docs at https://material-ui.com/components/buttons/
import {Button} from '@material-ui/core';
// Material UI icons
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// Title logo at the top of the screen
import logo from '../../assets/title.png';

import MenuRules from './MenuRules';
import ModeToggle from '../ModeToggle';

import {switchViewSetup} from '../../reducers/menuReducer';

//
// MainMenu Component.
// The smaller pieces will eventully be moved to their
// own component functions in other files.
//

const MainMenu = ({switchViewSetup}) => {
  return (
    <div className='mainMenu'>
      <img src={logo} alt="Pictionary" width='400'/>
      <br/>
      <Button
        variant='contained'
        color='primary'
        style={playButtonStyle}
        onClick={switchViewSetup}
      >
        <PlayArrowIcon fontSize='large'/>
        Play
      </Button>
      <br/>
      <ModeToggle/>
      <MenuRules/>
    </div>
  );
};

const playButtonStyle = {
  paddingLeft: '50px',
  paddingRight: '50px',
  backgroundColor: 'green',
  fontSize: '50px',
  marginTop: '50px',
};

// const mapDispatchToProps = {switchViewMenu: () =>
// dispatch(switchViewMenu())};

export default connect(null, {switchViewSetup})(MainMenu);

