import React from "react";
import { Table, Card } from "evergreen-ui";
import styles from "./CurrentPlaylist.module.css"
import SongRow from "../SongRow/SongRow"

const CurrentPlaylist = (props) => {
  let { playlist } = props;
  return (
    <Card className={styles.container}>
      <Table className={styles.table}>
        <Table.Body className={styles.tableBody}>
          {playlist.map((song, index) => <SongRow
            song={song}
            index={index}
            nowPlaying = { props.nowPlayingId === song.id }
            changeToMediaAtIndex={props.changeToMediaAtIndex}
            handleSong={props.handleSong}
          />)}
        </Table.Body>
      </Table>
    </Card>
  )
};

export default CurrentPlaylist;