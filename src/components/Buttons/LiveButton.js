import React from 'react';
import { secondaryColorOpaque } from 'eros-ui/theme';
import Button from './Button';

export const LiveButton = ({ onPress, ...rest }) => (
  <Button
    text="LIVE"
    onPress={onPress}
    style={styles.liveButton}
    fontStyle={styles.liveButtonFont}
    {...rest}
  />
);

const styles = {
  liveButton: { padding: 12 },
  liveButtonFont: { color: secondaryColorOpaque, fontSize: 17, lineHeight: 17 },
};
