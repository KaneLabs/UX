import * as React from 'react';
import { View, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import Typography from '@kanelabs/ux/components/Typography';
import { makeStyles, TypographyTypes, Theme } from '@kanelabs/ux/theme';

export interface ListSubtitleProps {
  dense?: boolean;
  text?: string;
  style?: StyleProp<ViewStyle>;
}

const ListSubtitle: React.FC<ListSubtitleProps> = ({
  text,
  dense = false,
  style,
  ...rest
}) => {
  const styles = useStyles();
  const overrideableStyle = StyleSheet.compose(
    dense ? styles.dense : styles.listSubtitle,
    style,
  );
  return (
    <View style={overrideableStyle} {...rest}>
      <Typography
        type={TypographyTypes.subtitle2}
        text={text}
        numberOfLines={1}
      />
    </View>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
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
