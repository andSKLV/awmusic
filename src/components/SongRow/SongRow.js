import React from "react";
import {Paragraph, Table} from "evergreen-ui";
import styles from "./SongRow.module.css"

const SongRow = props => {
  let { song, isNowPlaying, changeToMediaAtIndex, index, handleSong } = props;
  return (
    <Table.Row
      className={isNowPlaying ? styles.playable : styles.notPlayable}
      key={song.title+song.artistName+song.albumName}
      isSelectable
      onSelect={async () => { await changeToMediaAtIndex(index); handleSong() }}
    >
      <Table.TextCell>
        <Paragraph size={300}>{song.artistName}</Paragraph>
      </Table.TextCell>
      <Table.TextCell>
        <Paragraph size={300}>{song.title}</Paragraph>
      </Table.TextCell>
    </Table.Row>
  )
};

export default SongRow