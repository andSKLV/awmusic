import React from "react";
import { SearchInput } from "evergreen-ui";
import TabsContainer from "../TabsContainer";
import styles from "./Sidebar.module.css";
import CurrentPlaylist from "../CurrentPlaylist/CurrentPlaylist";

const Sidebar = props => {
  return (
    <div className={styles.SidebarContainer}>
      <SearchInput placeholder="Filter traits..." width="100%" />
      <TabsContainer
        isAuthorized={props.isAuthorized}
        authorize={props.authorize}
        unauthorize={props.unauthorize}
        currentTab={props.currentTab}
      />
      <div className={styles.SidebarContainer_Child}>Some</div>
      <CurrentPlaylist/>
    </div>
  );
};
export default Sidebar;
