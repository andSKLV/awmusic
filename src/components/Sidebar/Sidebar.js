import React from "react";
import TabsContainer from "../TabsContainer";
import styles from "./Sidebar.module.css";
import CurrentPlaylist from "../CurrentPlaylist/CurrentPlaylist";

const Sidebar = props => {
  return (
    <div className={styles.SidebarContainer}>
      <TabsContainer
        isAuthorized={props.isAuthorized}
        authorize={props.authorize}
        unauthorize={props.unauthorize}
        currentTab={props.currentTab}
        handleTab={props.handleTab}
      />
      <CurrentPlaylist
        playlist={props.playlist}
        nowPlaying={props.nowPlaying}
        changeToMediaAtIndex={props.changeToMediaAtIndex}
        handleSong={props.handleSong}
      />
    </div>
  );
};
export default Sidebar;
