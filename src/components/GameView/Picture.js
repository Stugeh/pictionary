import React from 'react';

const images = require.context('../../../public', true);

const Picture = () => {
  return (
    <div className='picture-container'>
      <img
        src={images('./puuhoyla.jpg').default}
      />
    </div>
  );
};

export default Picture;
