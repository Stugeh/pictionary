/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {ReactPainter} from 'react-painter';
import {connect} from 'react-redux';

import TopBar from './TopBar';
import PopUp from './PopUp';
import SideBar from './SideBar';

const MultiPlayer = ({game}) => {
  return (
    <div className='gameGrid'>
      <TopBar/>
      {!game.roundInProgress ?
          <div className='popUp'>
            <PopUp/>
          </div> : null}
      <div className='canvas'>
        <ReactPainter
          height={3000}
          width={3000}
          render={({canvas}) => (
            <span>{canvas}</span>
          )}
        />
      </div>
      <SideBar playerList={game.playerList}/>
    </div>
  );
};

const mapStateToProps = (state) => ({game: state.multiplayer});

export default connect(mapStateToProps)(MultiPlayer);
