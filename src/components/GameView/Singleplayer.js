import React from 'react';
import {connect} from 'react-redux';

import TopBar from './TopBar';

const Singleplayer = ({game}) => {
  return (
    <div className='gameGrid'>
      <TopBar/>
    </div>
  );
};

const mapStateToProps = (state) => ({game: state.multiplayer});

export default connect(mapStateToProps)(Singleplayer);
