import React from 'react';
import {Pane} from "evergreen-ui";
import SoundBar from "../SoundBar/SoundBar"

const Player = props => {
  return (
    <div className="player_container">
      <Pane
        width="100%"
      >
        <img src={props.artworkURL} alt="Обложка" height="100%" width="100%"/>
      </Pane>
      <Pane
        display="flex"
        flexFlow="column nowrap"
        alignItems="center"
        justifyContent="center"
      >
        <SoundBar title={props.title} authorName={props.authorName} albumName={props.albumName}/>
      </Pane>
      <div style={{'height' : '64px'}}>
        btns 
      </div>
    </div>
  );
};

export default Player;