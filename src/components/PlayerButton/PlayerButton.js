import React from 'react';
import { IconButton } from "evergreen-ui";

const PlayerButton = props => {
  const {onClick, icon} = props;
  return <IconButton
    icon={icon}
    iconSize={32}
    appearance="minimal"
    onClick={onClick}
    marginX="2.5%"
  />
};

export default PlayerButton;