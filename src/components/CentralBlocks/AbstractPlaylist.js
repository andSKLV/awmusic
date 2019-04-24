import React from 'react';
import {getUrlWithSize} from '../../service/helpers.js';
import styles from './CentralBlock.module.css';

const AbstractPlaylist = props => {
    const { url, artist, name, id, onClick } = props;
    const renderText = () => {
        if (artist) {
            return (
                <p>{artist} - {name}</p>
            );
        }
        return <p>{name}</p>
    }
    return (
        <div onClick={()=>onClick(id)}>
            <img className={styles.artwork} src={getUrlWithSize(url,150)} alt='artwork'/>
            {renderText()}
        </div>
    )
}
export default AbstractPlaylist;