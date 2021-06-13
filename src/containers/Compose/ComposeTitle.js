import React from 'react';
import { Multiline } from 'eros-ui/components';
import { unit } from 'eros-ui/theme';

const ComposeTitle = ({ title, setTitle }) => (
  <Multiline
    style={{
      marginHorizontal: unit * 1.5,
      fontSize: 21,
      lineHeight: 30,
      alignItems: 'center',
    }}
    placeholder="Enter a Title"
    value={title}
    onChangeText={setTitle}
  />
);

export default ComposeTitle;
