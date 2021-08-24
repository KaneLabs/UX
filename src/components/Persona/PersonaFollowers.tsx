import React from 'react';
import Row from 'eros-ui/components/Row';
import Typography, { TypographyTypes } from 'eros-ui/components/Typography';

const PersonaFollowers: React.FC<{ followers: number }> = ({ followers, ...props }) => (
  <Row {...props} center>
    <Typography type={TypographyTypes.subtitle2} text={`${followers}`} style={{ fontWeight: '600' }} />
    <Typography type={TypographyTypes.subtitle2} text=" Followers" />
  </Row>
);

export default PersonaFollowers;
