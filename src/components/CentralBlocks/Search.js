import React from 'react';
import { SearchInput } from "evergreen-ui";
import styles from './CentralBlock.module.css';
import Songs from './Songs.js';

const Search = props => {
    const {value, onChange,onClick,data} = props;
    return (
        <div>
            <SearchInput value={value} onChange={onChange} />
            <Songs onClick={onClick} data={data}/>
        </div>
    );
}
export default Search;