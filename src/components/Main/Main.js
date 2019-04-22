import React from 'react';
import Sidebar from '../Sidebar';
import Player from '../Player';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Playlists from '../CentralBlocks/Playlists.js';
import Albums from '../CentralBlocks/Albums.js';
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
    playlists: [],
    albums: [],
  };

  componentDidMount() {
    document.addEventListener('musickitloaded', () => this.init());
  }
  init = async () => {
    this.music = new Api();
    await this.music.configure();
    const isAuthorized = this.isAuthorized();
    if (isAuthorized) {
      await this.loadData();
      this.setSong();
    }
  }
  setSong = async () => {
    const firstAlbumId =  this.state.albums[0].id;
    const songs = await this.getSongsOfAlbum(firstAlbumId);
    if (!songs.length) return false;
    const firstSong = songs[0].id;
    this.setQueue(firstSong,'song');
  }
  async getAlbumInfo(id) {
    return await this.music.getAlbum(id);
  }
  getSongsOfAlbum = async (id) => {
    const album = await this.getAlbumInfo(id);
    return album.relationships.tracks.data;
  }
  setQueue = (id,type) => {
    this.music.setQueue(id,type);
  }
  loadData = async () => {
    return Promise.all([this.getAlbums(), this.getPlaylists()]);
  }
  isAuthorized = async () => {
    const isAuthorized = await this.music.isAuthorized();
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
      }, async ()=>{
        await this.loadData();
        this.setSong();
      });
    }
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
    this.setState({
      isPlaying: true,
    })
  }
  pause = () => {
    this.music.pause();
    this.setState({
      isPlaying: false,
    })
  }
  getAlbums = async () => {
    const albums = await this.music.getAlbums();
    this.setState({albums});
    return albums;
  }
  getPlaylists = async () => {
    const playlists = await this.music.getPlaylists();
    this.setState({ playlists });
    return playlists;
  }
  getURL = (url, size) => {

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
            <Route path="/albums" render={() => {
              return (
                <Albums
                  data={this.state.albums}
                />
              )
            }}
            />
            <Route path="/playlists" render={()=>{
              return (
                <Playlists 
                  data={this.state.playlists}
                />
              )
            }} 
            />
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