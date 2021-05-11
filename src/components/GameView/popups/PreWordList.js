import React from 'react';
import {connect} from 'react-redux';

import {Divider, Button} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

import {popupWordList} from '../../../reducers/popupReducer';

const PreWordList = ({playerList, drawer, popupWordList}) => {
  return (
    <div style={{padding: '20px'}}>
      <h2>
        Everyone look away while {playerList[drawer].name} chooses
        a word to draw
      </h2>
      <Divider/>
      <Button
        variant='contained'
        onClick={popupWordList}
        style={{
          width: '98%',
          color: 'white',
          backgroundColor: 'green',
          fontSize: '20px',
        }}
      >
        <VisibilityIcon style={{paddingRight: '10px'}}/>
        Reveal
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  playerList: state.multiplayer.playerList,
  drawer: state.multiplayer.currentDrawer,
});

const mapDispatchToProps = {popupWordList};

export default connect(mapStateToProps, mapDispatchToProps)(PreWordList);
