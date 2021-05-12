import React from 'react';
import {connect} from 'react-redux';

import {Paper, Slider} from '@material-ui/core';

import PaletteIcon from '@material-ui/icons/Palette';
import DeleteIcon from '@material-ui/icons/Delete';

import {updateBrushSize} from '../../reducers/multiplayerReducer';

const Toolbar = ({canvasRef, updateBrushSize}) => {
  return (
    <div className='toolBar'>
      <Paper
        style={{height: '100%'}}
        elevation={24}
      >
        <PaletteIcon/><br/>

        <Slider
          style={{height: '400px', marginLeft: '20px'}}
          orientation="vertical"
          max={40}
          min={1}
          onChangeCommitted={(e, size) => updateBrushSize(size)}
        />

        <DeleteIcon
          onClick={() => canvasRef.current.clear()}
        />
      </Paper>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  updateBrushSize: (size) => dispatch(updateBrushSize(size)),
});

export default connect(null, mapDispatchToProps)(Toolbar);
