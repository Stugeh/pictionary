/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {ReactPainter} from 'react-painter';
import {connect} from 'react-redux';

import {useRound} from '../../hooks/roundHook';
import {initGame} from '../../reducers/multiplayerReducer';
import TopBar from './TopBar';
import PopUp from './PopUp';
import SideBar from './SideBar';

const MultiPlayer = (props) => {
  useEffect(() => {
    props.initGame(TEST_SETTINGS);
  }, []);


  const playerList= TEST_SETTINGS.playerList;

  // const {round} = useRound(TEST_SETTINGS);

  return (
    <div className='gameGrid'>
      {/* <TopBar/>
      {!round.inProgress ?
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
      <SideBar playerList={TEST_SETTINGS.playerList}/> */}
    </div>
  );
};

const mapStateToProps = (state) => ({game: state.game});

const mapDispatchToProps = (dispatch) => {
  return {initGame: (settings) => dispatch(initGame(settings))};
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiPlayer);
