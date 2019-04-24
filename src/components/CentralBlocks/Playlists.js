import React from 'react';
import AbstractPlaylist from './AbstractPlaylist.js';
import { Link } from 'react-router-dom';
import styles from './CentralBlock.module.css';

const Playlists = props => {
    const {data, onClick} = props;
    return (
        <div className={styles.gridTemplate}>
            {data.map(el => {
                const { name } = el.attributes;
                const url = el.attributes.artwork.url;
                const id = el.id;
                return (
                    <Link to='/songs' key={id} className={styles.plate}>
                        <AbstractPlaylist
                            onClick={onClick}
                            id={id}
                            url={url}
                            name={name}
                            key={id}
                        />
                    </Link>
                )
            })}
        </div>
    )

}
export default Playlists;