/* eslint-disable no-unused-vars */
import React, {useRef} from 'react';
import CanvasDraw from 'react-canvas-draw';
import {connect} from 'react-redux';

import TopBar from './TopBar';
import PopUp from './PopUp';
import SideBar from './SideBar';
import Toolbar from './Toolbar';

const MultiPlayer = ({game}) => {
  // stores reference to the canvas so it can be cleared
  const canvasRef = useRef(null);
  return (
    <div className='gameGrid'>
      <TopBar/>
      {!game.roundInProgress ? <PopUp/> : null}
      <Toolbar canvasRef={canvasRef}/>
      <CanvasDraw
        className='canvas'
        ref={canvasRef}
        lazyRadius={0}
        brushColor={game.brushColor}
        brushRadius={game.brushSize}
      />
      <SideBar playerList={game.playerList}/>
    </div>
  );
};

const mapStateToProps = (state) => ({game: state.multiplayer});

export default connect(mapStateToProps)(MultiPlayer);
