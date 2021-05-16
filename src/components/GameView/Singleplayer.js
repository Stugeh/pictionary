import React from 'react';
import {connect} from 'react-redux';

import TopBar from './TopBar';
import Picture from './Picture';
import GuessBox from './GuessBox';

const Singleplayer = () => {
  return (
    <div className='gameGrid'>
      <TopBar/>
      <Picture/>
      <GuessBox/>
    </div>
  );
};

const mapStateToProps = (state) => ({game: state.multiplayer});

export default connect(mapStateToProps)(Singleplayer);
