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
  state = {
    currentTab: 'browse',
    nowPlaying: null
  };

  componentDidMount() {
    document.addEventListener('musickitloaded', () => {
      this.music = this.MusicKit.configure({
        developerToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhKWVI5TFpCNVgifQ.eyJpYXQiOjE1NDQwMjU5MzEsImV4cCI6MTU1OTU3NzkzMSwiaXNzIjoiVUM5REc5Mko2SiJ9.NE-pTkKDHS6klZ52oub617LWgvedHMYFG4-p8csfuIQH60S7gGwSIWeigY7h4R_eKcLA8X3KZqyMT0H0Ix73Iw',
        name: 'Codepen',
        build: '1'
      }).getInstance();
    });
  }

  handleSong = () => {
    this.setState({nowPlaying: this.music.nowPlayingItem})
  };

  handleTab = () => {
    this.setState({currentTab: this.music.nowPlayingItem})
  };

  render () {
    return (
      <Router>
        <div className={styles.MainContainer}>
          <div className={styles.MainLeft}>
            <Sidebar
              isAuthorized={this.music.isAuthorized}
              authorize={this.music.authorize}
              unauthorize={this.music.unauthorize}
              changeToMediaAtIndex={this.music.changeToMediaAtIndex}
              playlist={this.music.player.queue.items}
              currentTab={this.state.currentTab}
              nowPlaying={this.state.nowPlaying}
              handleSong={this.handleSong}
              handleTab={this.handleTab}
            />
          </div>
          <div className={styles.MainCenter}>
            <Route path="/" exact component={Greating} />
            <Route path="/playlists" component={Playlists} />
            <Route path="/recent" component={Recent} />
            <Route path="/some" component={Some} />
          </div>
          <div className={styles.MainRight}>
            <Player
              nowPlaying={this.state.nowPlaying}
              isPlaying={this.music.player.isPlaying}
              play={this.music.play}
              pause={this.music.pause}
              skipToPreviousItem={this.music.skipToPreviousItem}
              skipToNextItem={this.music.skipToNextItem}
            />
          </div>
        </div>
      </Router>
    )
  }
}

export default Main;