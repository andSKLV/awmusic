import React from 'react';

const Player = props => {
  return (
    <div className="player_container">
      <div style={{"height":"320px","weight":"320px"}}>
        Picture
      </div>
      <div style={{"height": "32px"}}>
        sound bar
      </div>
      <div style={{'height' : '64px'}}>
        btns 
      </div>
    </div>
  );
}

export default Player;