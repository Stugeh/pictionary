import React from 'react';
// Material UI button component. Material UI docs at https://material-ui.com/components/buttons/
import {Button} from '@material-ui/core';
// Material UI icons
import PersonIcon from '@material-ui/icons/Person';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';

const ModeToggle = ({setActiveMode, activeMode}) => {
  // switches active gamemode
  const handleRadio = () => {
    activeMode === 'multiPlayer' ?
        setActiveMode('singlePlayer') :
        setActiveMode('multiPlayer');
  };
  return (
    <div className='radioButtons'>
      <Button
        variant={activeMode === 'singlePlayer' ? 'contained': 'outlined'}
        color='primary'
        onClick={handleRadio}
      >
        <PersonIcon fontSize='large' />
      </Button>
      <Button
        variant={activeMode === 'multiPlayer' ? 'contained': 'outlined'}
        color='primary'
        onClick={handleRadio}>
        <PeopleAltSharpIcon fontSize='large' />
      </Button>
    </div>
  );
};

export default ModeToggle;


