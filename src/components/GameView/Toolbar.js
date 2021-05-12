import React from 'react';

import {Paper, Slider} from '@material-ui/core';

import PaletteIcon from '@material-ui/icons/Palette';
import DeleteIcon from '@material-ui/icons/Delete';

const Toolbar = ({canvasRef}) => {
  return (
    <div className='toolBar'>
      <Paper
        style={{height: '100%'}}
        elevation={24}
      >
        <PaletteIcon/><br/>

        <Slider orientation="vertical"/>

        <DeleteIcon
          onClick={() => canvasRef.current.clear()}
        />
      </Paper>
    </div>
  );
};

export default Toolbar;
