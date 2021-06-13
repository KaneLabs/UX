import React from 'react';
import { View, Subtitle } from 'eros-ui/components';
import { makeStyles } from 'eros-ui/theme';

const ListSubtitle = ({ text, dense = false }) => (
  <View style={[dense ? styles.dense : styles.listSubtitle]}>
    <Subtitle type={2} text={text} numberOfLines={1} />
  </View>
);

const useStyles = makeStyles((theme) => ({
  listSubtitle: {
    paddingHorizontal: theme.unit * 1.5,
    paddingVertical: theme.unit * 1.5,
  },
  dense: {
    paddingHorizontal: theme.unit,
    paddingVertical: theme.unit,
  },
}));

export default ListSubtitle;