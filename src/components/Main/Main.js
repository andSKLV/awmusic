import React from 'react';
import Sidebar from '../Sidebar';
import Player from '../Player';

class Main extends React.Component {
  render () {
    return (
      <div className='main_container'>
        <div className='main_left'>
          <Sidebar/>
        </div>
        <div className='main_center'>
        </div>
        <div className='main_right'>
          <Player/>
        </div>
      </div>
    )
  }
}

export default Main;