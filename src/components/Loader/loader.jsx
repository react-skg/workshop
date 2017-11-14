import React from 'react';
import Logo from '../Logo';

const PageLoader = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2em'
      }}
    >
      <Logo />
      <span>Loading...</span>
    </div>
  );
};

export default PageLoader;
