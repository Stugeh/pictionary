import React from 'react';
import ScoreBoard from './ScoreBoard';

const SideBar = ({playerList}) => {
  return (
    <div className='sidebar'>
      <ScoreBoard playerList={playerList} />
    </div>
  );
};

export default SideBar;
