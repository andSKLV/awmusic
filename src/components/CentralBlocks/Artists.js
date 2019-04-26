import React from 'react';
import styles from './CentralBlock.module.css';
import List from './List.js';

const Artists = props => {
    const { data, onClick } = props;
    if (!data.length) return null;
    return (
        <div>
            <List data={data} onClick={onClick}/>
        </div>
    )
}
export default Artists;