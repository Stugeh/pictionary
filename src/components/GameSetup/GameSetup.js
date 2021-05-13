import React from 'react';
import {connect} from 'react-redux';

import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import {Button} from '@material-ui/core';

import {switchViewMenu} from '../../reducers/menuReducer';

import ModeToggle from '../ModeToggle';
import SingleSettings from './SingleSettings';
import MultiSettings from './MultiSettings';
import PlayerList from './PlayerList';


const GameSetup = ({activeMode, switchViewMenu}) => {
  return (
    <div className='gameSetup'>
      <Button
        className='backButton'
        variant='contained'
        color='secondary'
        onClick={switchViewMenu}
      >
        <KeyboardReturnIcon/>
      </Button>
      <h1 className='setupHeader'>
        {activeMode.toUpperCase()}
        <ModeToggle />
      </h1>

      {activeMode === 'singlePlayer' ? <SingleSettings /> : null}
      {activeMode === 'multiPlayer' ? <MultiSettings/> : null}

      <PlayerList className='playerList' />
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeMode: state.menu.activeMode,
});

const mapDispatchToProps = {switchViewMenu};

export default connect(mapStateToProps, mapDispatchToProps)(GameSetup);
