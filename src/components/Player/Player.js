import React from 'react';
import styles from './Player.module.css';

const Player = props => {
  return (
    <div className={styles.PLayerContainer}>
      <div style={{ "height": "320px", "weight": "320px" }}>
        Picture
      </div>
      <div className={styles.PlayerContainer_Child} style={{ "height": "32px" }}>
        sound bar
      </div>
      <div className={styles.PlayerContainer_Child} style={{ 'height': '64px' }}>
        btns
      </div>
    </div>
  );
}

export default Player;