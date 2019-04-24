import React from 'react';
import ListRow from './ListRow.js';
import styles from './CentralBlock.module.css';

const List = props => {
    const {data, onClick, isSong} = props;
    debugger;
    return (
        <div className={styles.List}>
            {
                data.map((row, ind) => {
                    const { id, attributes } = row;
                    const { name, artistName } = attributes;
                    const url = row.attributes.artwork.url;

                    return (
                        <ListRow
                            id={id}
                            key={ind}
                            name={name}
                            artist={artistName}
                            index={ind+1}
                            onClick={onClick}
                            url={url}
                            isSong={isSong}
                        />
                    )
                })
            }
        </div>
    );
}
export default List;