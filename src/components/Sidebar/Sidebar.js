import React from 'react';
import { SearchInput } from 'evergreen-ui'

const Sidebar = props=> {
  return (
    <div className='sidebar_container'>
      <SearchInput placeholder="Filter traits..." width="100%" />
      <div>
        Some
      </div>
      <div>
        Some
      </div>

    </div>
  );
}
export default Sidebar;