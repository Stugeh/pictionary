import React from 'react';
import {connect} from 'react-redux';

import {Paper, Slider} from '@material-ui/core';

import PaletteIcon from '@material-ui/icons/Palette';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import {updateBrushSize} from '../../reducers/multiplayerReducer';

const Toolbar = ({canvasRef, updateBrushSize}) => {
  return (
    <div className='toolBar'>
      <Paper
        style={{height: '100%'}}
        elevation={24}
      >
        <PaletteIcon focusable={true}/><br/>
        <EditIcon className='edit'/>
        <Slider
          style={{height: '400px', marginLeft: '20px'}}
          orientation="vertical"
          max={40}
          min={1}
          defaultValue={1}
          onChangeCommitted={(e, size) => updateBrushSize(size)}
        />
        <EditIcon
          className='edit'
          style={{fontSize: '30px', paddingLeft: '15px'}}
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
