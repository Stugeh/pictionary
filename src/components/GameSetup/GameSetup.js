import React from 'react';
import {connect} from 'react-redux';

import ModeToggle from '../ModeToggle';
import SingleSettings from './SingleSettings';
import MultiSettings from './MultiSettings';
import PlayerList from './PlayerList';


const GameSetup = ({activeMode}) => {
  return (
    <div className='gameSetup'>
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


export default connect(mapStateToProps)(GameSetup);
