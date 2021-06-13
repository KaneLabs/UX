import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { makeStyles } from 'eros-ui/theme';
import Icon from '../Icon';
import ButtonText from '../Typography/ButtonText';

const Tab = ({
  iconName,
  iconSize = 20,
  text = null,
  row = null,
  ...props
}) => {
  const styles = useStyles();
  return (
    <TouchableOpacity style={[styles.tab, row && styles.row]} {...props}>
      {iconName && (
        <View style={[styles.iconContainer, text && styles.marginRight]}>
          <Icon size={iconSize} name={iconName} />
        </View>
      )}
      {text && <ButtonText text={text} />}
    </TouchableOpacity>
  );
};

const useStyles = makeStyles((theme) => ({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginRight: { marginRight: 12 },
}));

export default Tab;
