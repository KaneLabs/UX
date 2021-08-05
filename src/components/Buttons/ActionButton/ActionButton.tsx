import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { useTheme, makeStyles } from 'eros-ui/theme';
import ButtonText from '../../Typography/ButtonText';

export const ActionButton = (props) => {
  const [
    { unit, borderWidth, borderRadius, primaryColor, primaryColorOpaqueLight },
  ] = useTheme();
  const {
    children,
    onPress,
    text = null,
    title = null,
    backgroundColor,
    underlayColor,
    style = {},
    fontStyle = {},
    ...rest
  } = props;

  const content = children || (
    <ButtonText style={fontStyle}>{text || title}</ButtonText>
  );
  return (
    <TouchableOpacity
      underlayColor={underlayColor}
      style={[styles.ActionButton, style]}
      onPress={onPress}
      {...rest}>
      <View>{content}</View>
    </TouchableOpacity>
  );
};

const useStyles = makeStyles((theme) => ({
  ActionButton: {
    borderWidth,
    borderRadius,
    borderColor: theme.primaryColor,
    backgroundColor: theme.primaryColor,
    minWidth: 60,
    minHeight: 32,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.unit,
  },
}));

export default ActionButton;
