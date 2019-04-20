import React from 'react';
import {Card, Table, Icon, Paragraph, Heading} from 'evergreen-ui';
import {Link} from 'react-router-dom';
import styles from "./TabsContainer.module.css"

const TabsContainer = props => {
      const library = {
        "Artists": {name: "Артисты", icon: "person"},
        "Albums": {name: "Альбомы", icon: "media"},
        "Songs": {name: "Композиции", icon: "music"},
        "Playlists": {name: "Плейлисты", icon: "properties"}
      };
      const apiLibrary = {
        "Browse": {name: "Чарты", icon: "globe"},
        "Recommendations": {name: "Рекомандации", icon: "heart"},
      };
      const wrapper = (tabs) => {
        return Object.keys(tabs).map(tab => {
          const linkTo = '/'+tab.toLocaleLowerCase();
          return (
            <Link to={linkTo}>
              <Table.Row key={tab} className={tab === props.currentTab? styles.selectedCell : styles.cell}>
                <Table.Cell>
                  <Icon icon={tabs[tab].icon} marginRight={16} />
                  <Paragraph size={500}>{tabs[tab].name}</Paragraph>
                </Table.Cell>
              </Table.Row>
            </Link>
          )
        })
      };
      return (
        <Card className={styles.container}>
          <Table className={styles.table}>
            <Table.Body className={styles.tableBody}>
              {wrapper(apiLibrary)}
              <Table.Row key="Library" className={styles.heading}>
                <Table.Cell>
                  <Heading size={400}>{"Медиатека"}</Heading>
                </Table.Cell>
              </Table.Row>
              {wrapper(library)}
              <Table.Row
                key="auth"
                className={styles.cell}
                isSelectable
                onSelect={props.isAuthorized ? props.unauthorize : props.authorize}>
                <Table.Cell>
                  <Icon icon={props.isAuthorized ? "log-out" : "log-in"} color="66788A" marginRight={16} />
                  <Paragraph size={500}>{props.isAuthorized ? "Выйти" : "Войти"}</Paragraph>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Card>
      )
};

export default TabsContainer;