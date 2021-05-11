import React from 'react';
import {connect} from 'react-redux';
// Material UI button component. Material UI docs at https://material-ui.com/components/buttons/
import {Button} from '@material-ui/core';
// Material UI icons
import PersonIcon from '@material-ui/icons/Person';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';

import {switchMode} from '../reducers/menuReducer';

const ModeToggle = ({activeMode, switchMode}) => {
  return (
    <div className='radioButtons'>
      <Button
        variant={activeMode === 'singlePlayer' ? 'contained': 'outlined'}
        color='primary'
        onClick={switchMode}
      >
        <PersonIcon fontSize='large' />
      </Button>
      <Button
        variant={activeMode === 'multiPlayer' ? 'contained': 'outlined'}
        color='primary'
        onClick={switchMode}>
        <PeopleAltSharpIcon fontSize='large' />
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({activeMode: state.menu.activeMode});

const mapDispatchToProps = {switchMode};

export default connect(mapStateToProps, mapDispatchToProps)(ModeToggle);


