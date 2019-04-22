import React from 'react';
import AbstractPlaylist from './AbstractPlaylist.js';

const Albums = props => {
    debugger;
    const { data } = props;
    return (
        <>
            {data.map(el=>{
                const { artistName, name } = el.attributes;
                const url = el.attributes.artwork.url;
                const id = el.id;
                return (
                    <AbstractPlaylist 
                        id = {id}
                        url = {url}
                        artist = {artistName}
                        name = {name}
                    />
                )   
            })}
        </>
    )
}
export default Albums;