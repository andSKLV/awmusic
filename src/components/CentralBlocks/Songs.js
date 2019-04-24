import React from 'react';
import styles from './CentralBlock.module.css';
import List from './List.js';

const Songs = props => {
    const { data, onClick} = props;
    if (!data.length) return null;
    return (
        <div>
            <List data={data} onClick={onClick} isSong={true}/>
        </div>
    )
}
export default Songs;