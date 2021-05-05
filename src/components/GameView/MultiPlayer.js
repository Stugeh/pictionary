import React from 'react';
import {ReactPainter} from 'react-painter';

const MultiPlayer = () => {
  return (
    <div className='gameGrid'>
      <div className='canvas'>
        <ReactPainter
          toolbarPlacement='left'
          height={1000}
          width={1000}
          render={({canvas}) => (
            <div>{canvas}</div>
          )}
        />
      </div>
    </div>
  );
};

export default MultiPlayer;
