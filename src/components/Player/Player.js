import React from 'react';
import {Pane} from "evergreen-ui";

const Player = props => {
  return (
    <div className="player_container">
      <Pane
        width="100%"
      >
        <img src={props.artworkURL} alt="Обложка" height="100%" width="100%"/>
      </Pane>
      <div style={{"height": "32px"}}>
        sound bar
      </div>
      <div style={{'height' : '64px'}}>
        btns 
      </div>
    </div>
  );
};

export default Player;