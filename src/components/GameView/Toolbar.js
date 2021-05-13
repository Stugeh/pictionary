import React from 'react';
import {connect} from 'react-redux';

import {GithubPicker} from 'react-color';
import {Paper, Slider} from '@material-ui/core';

import PaletteIcon from '@material-ui/icons/Palette';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import {togglePalette, updateBrushSize, updateBrushColor,
} from '../../reducers/multiplayerReducer';

const Toolbar = ({
  canvasRef, updateBrushSize, togglePalette,
  updateBrushColor, paletteVisible,
}) => {
  return (
    <div className='toolBar'>
      <Paper
        elevation={24}
      >
        <PaletteIcon onClick={togglePalette}/><br/>
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
      {paletteVisible ?
        <GithubPicker
          onChange={(color) => {
            updateBrushColor(color.hex);
            togglePalette();
          }}
        /> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  brushColor: state.multiplayer.brushColor,
  paletteVisible: state.multiplayer.paletteVisible,
});

const mapDispatchToProps = (dispatch) => ({
  updateBrushSize: (size) => dispatch(updateBrushSize(size)),
  updateBrushColor: (color) => dispatch(updateBrushColor(color)),
  togglePalette: () => dispatch(togglePalette()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
