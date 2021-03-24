import React from 'react';
import Player from './Player/Player';
import style from './browse.module.css';

const Browse = () => {
  return (
    <div className={style.browse}>
      <Player />
    </div>
  );
};

export default Browse;
