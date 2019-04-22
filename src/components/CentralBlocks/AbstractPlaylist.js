import React from 'react';

const AbstractPlaylist = props => {
    debugger;
    const { artist, url, name, id } = props;
    return (
        <>
            {artist} - {name}
        </>
    )
}
export default AbstractPlaylist;