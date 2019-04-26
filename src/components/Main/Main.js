import React from 'react';
import Sidebar from '../Sidebar';
import Player from '../Player';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Playlists from '../CentralBlocks/Playlists.js';
import Albums from '../CentralBlocks/Albums.js';
import Artists from '../CentralBlocks/Artists.js';
import Songs from '../CentralBlocks/Songs.js';
import Recent from '../CentralBlocks/Recent.js';
import Some from '../CentralBlocks/Some.js';
import Search from '../CentralBlocks/Search.js';
import Greating from '../CentralBlocks/Greating.js';
import styles from "./Main.module.css";
import Api from "../../service/api.js";
import { getUrlWithSize} from '../../service/helpers.js';

class Main extends React.Component {
  state = {
    currentTab: 'browse',
    nowPlaying: {
      artworkURL: 'https://via.placeholder.com/256',
      title: 'song',
      authorName: 'author',
      albumName: 'album',
    },
    isAuthorized: false,
    queue: [],
    isPlaying: false,
    playlists: [],
    albums: [],
    artists: [],
    songs: [],
    searchValue: '',
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
      this.setFirstSong();
    }
  }
  setFirstSong = async () => {
    const firstAlbumId =  this.state.albums[0].id;
    const songs = await this.getSongsOfAlbum(firstAlbumId);
    if (!songs.length) return false;
    const firstSong = songs[0].id;
    this.setQueue(firstSong,'song');
  }
  setSong = (id) => {
    this.setQueue(id, 'song');
  }
  getSongsOfAlbum = async (id) => {
    return await this.getSongsOf(id,'Album');
  }
  getSongsOfArtist = async (id) => {
    return await this.getSongsOf(id, 'Artist');
  }
  getSongsOfPlaylist = async (id) => {
    const resp = await this.getSongsOf(id, 'Playlist');
    resp.forEach(x => x.id = x.attributes.playParams.catalogId); //quirk
    return resp;
  }
  getSongsOf = async (id,type) => {
    const api = `get${type}`;
    const response = await this.music[api](id);
    return this.extractSongs(response);
  }
  onAlbumClick = async (id) => {
    this.setState({songs:[]},async()=>{
      const songs = await this.getSongsOfAlbum(id);
      this.setState({ songs });
    })
  }
  onPlaylistClick = async (id) => {
    this.setState({songs:[]},async()=> {
      const songs = await this.getSongsOfPlaylist(id);
      this.setState({ songs });
    })
  }
  onArtistClick = async (id) => {
    this.setState({songs:[]},async()=>{
      const songs = await this.getSongsOfArtist(id);
      this.setState({ songs });
    })
  }
  onSongClick = (data) => {
    const { id, name, artist, url} = data;
    const fullUrl = getUrlWithSize(url,256);
    this.setSong(id);
    const nowPlaying = {
      artworkURL: fullUrl,
      title: name,
      authorName:artist,
    };
    this.setState({nowPlaying})
  }
  extractSongs = data => {
    return data.relationships.tracks.data;
  }
  setQueue = (id,type) => {
    this.music.setQueue(id,type);
  }
  loadData = async () => {
    return Promise.all([this.getAlbums(), this.getPlaylists(), this.getArtists()]);
  }
  isAuthorized = async () => {
    const isAuthorized = await this.music.isAuthorized();
    this.setState({ isAuthorized });
  }
  onSearchChange = async (e) => {
    const val = e.currentTarget.value;
    if (val==='') {
      this.setState({songs:[]})
    } else {
      this.search(val);
    }
    this.setState({searchValue:val})
  }
  search = async (val) => {
    const res =  await this.music.search(val);
    const songs = (res && res.songs) ?  res.songs.data : [];
    this.setState({songs})
    return songs;
  }
  handleSong = () => {
    this.setState({ nowPlaying: this.music.nowPlayingItem })
  };
  handleTab = () => {
    this.setState({ currentTab: this.music.nowPlayingItem, songs: [] })
  };
  authorize = async () => {
    const res = await this.music.authorize();
    if (res && res.length>5) {
      this.setState({
        isAuthorized: true
      }, async ()=>{
        await this.loadData();
        this.setFirstSong();
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
  getArtists = async () => {
    const artists = await this.music.getArtists();
    this.setState({ artists });
    return artists;
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
            <Route path="/search" render={() => {
              return (
                <Search
                  onChange={this.onSearchChange}
                  value={this.state.searchValue}
                  onClick={this.onSongClick}
                  data={this.state.songs}
                />
              )
            }}
            />
            <Route path="/albums" render={() => {
              return (
                <Albums
                  onClick={this.onAlbumClick}
                  data={this.state.albums}
                />
              )
            }}
            />
            <Route path="/playlists" render={()=>{
              return (
                <Playlists
                  onClick={this.onPlaylistClick}
                  data={this.state.playlists}
                />
              )
            }}
            />
            <Route path="/artists" render={() => {
              return (
                <Artists
                  onClick={this.onArtistClick}
                  data={this.state.artists}
                />
              )
            }}
            />
            <Route path="/songs" render={() => {
              return (
                <Songs
                  onClick={this.onSongClick}
                  data={this.state.songs}
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