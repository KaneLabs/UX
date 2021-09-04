import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import Typography, { TypographyTypes } from '../Typography';
import { makeStyles } from '@kanelabs/ux/theme';

export interface CardHeaderProps {
  title?: string;
  subtitle?: string;
  center?: boolean;
  children: React.ReactChild;
  style: ViewStyle;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  title,
  subtitle,
  center = false,
  style,
  ...props
}) => {
  const styles = useStyles();

  return (
    <View
      style={[center ? styles.CardHeaderCentered : styles.CardHeader, style]}
      {...props}>
      {title && <Typography type={TypographyTypes.h6} text={title} gutter />}
      {subtitle && (
        <Typography type={TypographyTypes.subtitle1} text={subtitle} />
      )}
      {children}
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  CardHeader: { padding: theme.padding, width: '100%' },
  CardHeaderCentered: {
    padding: theme.padding,
    width: '100%',
    alignItems: 'center',
  },
}));

export default CardHeader;
