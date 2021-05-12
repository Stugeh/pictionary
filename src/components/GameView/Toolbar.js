import React from 'react';

import {Paper} from '@material-ui/core';

import PaletteTwoToneIcon from '@material-ui/icons/PaletteTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';

const Toolbar = ({canvasRef}) => {
  return (
    <div className='toolBar'>
      <Paper
        style={{height: '100%'}}
        elevation={24}
      >
        <PaletteTwoToneIcon
        /><br/>
        <DeleteIcon
          onClick={() => canvasRef.current.clear()}
        />
      </Paper>
    </div>
  );
};

export default Toolbar;
