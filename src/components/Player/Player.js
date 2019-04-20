import React from 'react';
import {Pane} from "evergreen-ui";
import SoundBar from "../SoundBar/SoundBar"
import PlayerButton from "../PlayerButton/PlayerButton"

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
};

export default Player;