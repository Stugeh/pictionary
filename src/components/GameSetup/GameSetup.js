import React from 'react';
import {connect} from 'react-redux';

import ModeToggle from '../ModeToggle';
import SingleSettings from './SingleSettings';
import MultiSettings from './MultiSettings';
import PlayerList from './PlayerList';


const GameSetup = (props) => {
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
  game: state.game,
});


export default connect(mapStateToProps)(GameSetup);
