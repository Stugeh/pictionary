import React from 'react';
import {connect} from 'react-redux';

const images = require.context('../../assets', true);

const Picture = ({picture}) => {
  return (
    <div className='picture-container'>
      <img
        src={images(picture).default}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  picture: state.singleplayer.picture,
});

export default connect(mapStateToProps)(Picture);
