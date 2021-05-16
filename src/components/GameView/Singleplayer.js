import React from 'react';
import {connect} from 'react-redux';

import TopBar from './TopBar';
import Picture from './Picture';

const Singleplayer = ({game}) => {
  return (
    <div className='gameGrid'>
      <TopBar/>
      <Picture/>
    </div>
  );
};

const mapStateToProps = (state) => ({game: state.multiplayer});

export default connect(mapStateToProps)(Singleplayer);
