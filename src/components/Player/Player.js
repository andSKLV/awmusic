import React from 'react';
import {Pane} from "evergreen-ui";
import SoundBar from "../SoundBar/SoundBar"
import PlayerButton from "../PlayerButton/PlayerButton"
import styles from "./Player.module.css"

const Player = props => {
  return (
    <Pane className={styles.container}>
      <img className={styles.artwork} src={props.artworkURL} alt="Обложка"/>
      <SoundBar title={props.title} authorName={props.authorName} albumName={props.albumName}/>
      <Pane className={styles.buttons}>
        <PlayerButton icon="fast-backward" onClick={props.skipToPreviousItem}/>
        <PlayerButton icon={props.isPlaying ? "pause" : "play"} onClick={props.isPlaying ? props.pause : props.play}/>
        <PlayerButton icon="fast-forward" onClick={props.skipToNextItem}/>
      </Pane>
    </Pane>
  );
};

export default Player;