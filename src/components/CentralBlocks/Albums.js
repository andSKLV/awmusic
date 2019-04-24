import React from 'react';
import AbstractPlaylist from './AbstractPlaylist.js';
import { Link } from 'react-router-dom';
import styles from './CentralBlock.module.css';

const Albums = props => {
    const { data, onClick } = props;
    return (
        <div className={styles.gridTemplate}>
            {data.map(el=>{
                const { artistName, name } = el.attributes;
                const url = el.attributes.artwork.url;
                const id = el.id;
                return (
                    <Link to='/songs' key={id} className={styles.plate}>
                        <AbstractPlaylist
                            onClick={onClick}
                            id={id}
                            url={url}
                            artist={artistName}
                            name={name}
                        />
                    </Link>
                )
            })}
        </div>
    )
}
export default Albums;