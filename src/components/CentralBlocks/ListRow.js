import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CentralBlock.module.css';

const ListRow = props => {
    const {id,name,index,artist,onClick,isSong,url} = props;
    const str = artist ? `${artist} - ${name} ` : `${name} `
    if (isSong) {
        return (
            <div onClick={() => {
                onClick({ id, name, artist, url })
            }
            } className={styles.ListRow}>
                {index}  {str}
            </div>
        );
    }
    return (
        <Link to='/songs' className = {styles.ListRow}>
            <div onClick={()=>onClick(id)}>
                {index}  {str} 
            </div>
        </Link>
    );
}
export default ListRow;