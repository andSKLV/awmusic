import React from 'react';
import Sidebar from '../Sidebar';
import Player from '../Player';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Playlists from '../CentralBlocks/Playlists.js';
import Recent from '../CentralBlocks/Recent.js';
import Some from '../CentralBlocks/Some.js';
import Greating from '../CentralBlocks/Greating.js';
import styles from "./Main.module.css";

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div className={styles.MainContainer}>
          <div className={styles.MainLeft}>
            <Sidebar />
          </div>
          <div className={styles.MainCenter}>
            <Route path="/" exact component={Greating} />
            <Route path="/playlists" component={Playlists} />
            <Route path="/recent" component={Recent} />
            <Route path="/some" component={Some} />
          </div>
          <div className={styles.MainRight}>
            <Player />
          </div>
        </div>
      </Router>
    )
  }
}

export default Main;