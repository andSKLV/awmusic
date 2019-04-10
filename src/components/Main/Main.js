import React from 'react';
import Sidebar from '../Sidebar';
import Player from '../Player';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Playlists from '../CentralBlocks/Playlists.js';
import Recent from '../CentralBlocks/Recent.js';
import Some from '../CentralBlocks/Some.js';
import Greating from '../CentralBlocks/Greating.js';

class Main extends React.Component {
  render () {
    return (
      <Router>
        <div className='main_container'>
          <div className='main_left'>
            <Sidebar/>
          </div>
          <div className='main_center'>
            <Route path="/" exact component={Greating} />
            <Route path="/playlists" component={Playlists} />
            <Route path="/recent" component={Recent} />
            <Route path="/some" component={Some} />
          </div>
          <div className='main_right'>
            <Player/>
          </div>
        </div>
      </Router>
    )
  }
}

export default Main;