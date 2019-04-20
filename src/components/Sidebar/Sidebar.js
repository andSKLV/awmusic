import React from "react";
import { SearchInput } from "evergreen-ui";
import TabsContainer from "../TabsContainer";
import styles from "./Sidebar.module.css";

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
    </div>
  );
};
export default Sidebar;
