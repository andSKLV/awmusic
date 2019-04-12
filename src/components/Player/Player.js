import React from 'react';
import {Pane} from "evergreen-ui";
import PlayerButton from "../PlayerButton/PlayerButton"

const Player = props => {
  return (
    <div className="player_container">
      <div style={{"height":"320px","weight":"320px"}}>
        Picture
      </div>
      <div style={{"height": "32px"}}>
        sound bar
      </div>
      <Pane
        display="flex"
        flexFlow="row nowrap"
        alignItems="center"
        justifyContent="center"
      >
        <PlayerButton icon="fast-backward" onClick={props.skipToPreviousItem}/>
        <PlayerButton icon={props.isPlaying ? "pause" : "play"} onClick={props.isPlaying ? props.pause : props.play}/>
        <PlayerButton icon="fast-forward" onClick={props.skipToNextItem}/>
      </Pane>
    </div>
  );
}

export default Player;