import React, {Fragment} from 'react';
import { Heading, Paragraph } from "evergreen-ui";

const SoundBar = props => {
  const {title, authorName} = props;
  return (
    <Fragment>
      <Heading size={600}>{title}</Heading>
      <Paragraph size={500}>{`${authorName}`}</Paragraph>
    </Fragment>
  )
};

export default SoundBar;