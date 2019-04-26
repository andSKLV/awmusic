import React from 'react';
import styles from './CentralBlock.module.css';

const Greating = props => {
    return (
        <div className={styles.Greating}>
            <h1>
                Привет
            </h1>
            <h3>
                Выбери то, что тебе интересно и слушай!
            </h3>
        </div>
    )
}
export default Greating;