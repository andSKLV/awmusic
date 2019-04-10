import React from 'react';
import {Pane, Table, Icon} from 'evergreen-ui';
import {Link} from 'react-router-dom';

const TabsContainer = props => {
    const tabs = ['Playlists','Recent','Some'];
    return (
        <Pane>
            {
                tabs.map(tab=>{
                    const linkTo = '/'+tab.toLocaleLowerCase();
                    return (
                        <Link to={linkTo}>
                            <Table.Row
                                key={tab}
                                isSelectable
                                onSelect={()=>{}}
                            >
                                <Table.Cell>
                                    <Icon icon="crown" color="selected" marginRight={16} />
                                    {tab}
                                </Table.Cell>
                             </Table.Row>
                        </Link>
                    )
                })
            }
        </Pane>
    )
}

export default TabsContainer;