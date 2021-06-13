import React from 'react';
import { Row, Subtitle } from 'eros-ui/components';

export const Followers = ({ followers, style = null }) => (
  <Row style={style} center>
    <Subtitle text={`${followers}`} style={{ fontWeight: '600' }} />
    <Subtitle text=" Followers" />
  </Row>
);

export default Followers;
