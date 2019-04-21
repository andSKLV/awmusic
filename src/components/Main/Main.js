import React from 'react';
import Sidebar from '../Sidebar';
import Player from '../Player';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Playlists from '../CentralBlocks/Playlists.js';
import Recent from '../CentralBlocks/Recent.js';
import Some from '../CentralBlocks/Some.js';
import Greating from '../CentralBlocks/Greating.js';
import styles from "./Main.module.css";
import Api from "../../service/api.js";

class Main extends React.Component {
  state = {
    currentTab: 'browse',
    nowPlaying: {
      artworkURL: '',
      title: 'song',
      authorName: 'author',
      albumName: 'album',
    },
    isAuthorized: false,
    queue: [],
    isPlaying: false,
  };

  componentDidMount() {
    document.addEventListener('musickitloaded', () => this.init());
  }
  init = async () => {
    this.music = new Api();
    await this.music.configure();
    this.isAuthorized();
  }
  isAuthorized = async () => {
    console.log(this.music);
    const isAuthorized = await this.music.isAuthorized();
    if (isAuthorized) this.play();
    this.setState({ isAuthorized });
  }

  handleSong = () => {
    this.setState({ nowPlaying: this.music.nowPlayingItem })
  };

  handleTab = () => {
    this.setState({ currentTab: this.music.nowPlayingItem })
  };
  authorize = async () => {
    const res = await this.music.authorize();
    if (res && res.length>5) {
      this.setState({
        isAuthorized: true
      })
    }
    this.play();
  }
  unauthorize = async () => {
    await this.music.unauthorize();
    this.setState({
      isAuthorized: false
    });
  }
  changeToMediaAtIndex = ind => {

  }
  play = async () => {
    this.music.play();
  }
  pause = () => {

  }
  skipToPreviousItem = () => {

  }
  skipToNextItem = () => {

  }

  render() {
    return (
      <Router>
        <div className={styles.MainContainer}>
          <div className={styles.MainLeft}>
            <Sidebar
              isAuthorized={this.state.isAuthorized}
              authorize={this.authorize}
              unauthorize={this.unauthorize}
              changeToMediaAtIndex={this.changeToMediaAtIndex}
              playlist={this.state.queue}
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
              isPlaying={this.state.isPlaying}
              play={this.play}
              pause={this.pause}
              skipToPreviousItem={this.skipToPreviousItem}
              skipToNextItem={this.skipToNextItem}
            />
          </div>
        </div>
      </Router>
    )
  }
}

export default Main;