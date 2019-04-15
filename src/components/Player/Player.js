import React from 'react';
import {Pane} from "evergreen-ui";
import SoundBar from "../SoundBar"

const Player = props => {
  return (
    <div className="player_container">
      <div style={{"height":"320px","weight":"320px"}}>
        Picture
      </div>
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