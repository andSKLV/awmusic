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
  componentDidMount() {
    document.addEventListener('musickitloaded', () => {
      this.music = this.MusicKit.configure({
        developerToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhKWVI5TFpCNVgifQ.eyJpYXQiOjE1NDQwMjU5MzEsImV4cCI6MTU1OTU3NzkzMSwiaXNzIjoiVUM5REc5Mko2SiJ9.NE-pTkKDHS6klZ52oub617LWgvedHMYFG4-p8csfuIQH60S7gGwSIWeigY7h4R_eKcLA8X3KZqyMT0H0Ix73Iw',
        name: 'Codepen',
        build: '1'
      }).getInstance();
    });
  }

  render () {
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