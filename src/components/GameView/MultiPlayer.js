/* eslint-disable no-unused-vars */
import React, {useRef} from 'react';
import CanvasDraw from 'react-canvas-draw';
import {connect} from 'react-redux';

import TopBar from './TopBar';
import PopUp from './PopUp';
import SideBar from './SideBar';
import Toolbar from './Toolbar';

const MultiPlayer = ({game}) => {
  const canvasRef = useRef(null);
  return (
    <div className='gameGrid'>
      <TopBar/>
      {!game.roundInProgress ?
          <div className='popUp'>
            <PopUp/>
          </div> : null}
      <div className='canvas'>
        <Toolbar canvasRef={canvasRef}/>
        <CanvasDraw
          ref={canvasRef}
          height='100%'
          width='100%'
          undoSteps={30}
          lineWidth={game.lineWidth}
          lineColor={game.lineColor}
        />
      </div>
      <SideBar playerList={game.playerList}/>
    </div>
  );
};

const mapStateToProps = (state) => ({game: state.multiplayer});

export default connect(mapStateToProps)(MultiPlayer);
