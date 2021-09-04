import React from 'react';
import { Platform, View } from 'react-native';
import { TextField } from '@kanelabs/ux/components';
import { makeStyles } from '@kanelabs/ux/theme';

export const SearchInput = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <TextField style={styles.searchField} placeholder="Search" {...props} />
    </View>
  );
};

const useStyles = makeStyles(
  ({ unit, padding, borderColor, borderWidth, textColor }) => ({
    container: {
      paddingVertical: padding,
      paddingHorizontal: padding * 2,
      // width: '100%',
      // maxWidth: 540,
      flex: 1,
    },
    searchField: Platform.select({
      web: {
        width: '100%',
        height: unit * 4,
        borderRadius: unit * 4,
        borderColor,
        borderWidth,
        backgroundColor: 'rgba(0,0,0,0.15)',
        backdropFilter: 'blur(12px)',
        // marginHorizontal: unit * 2,
        // marginVertical: unit * 2,
        padding: unit,
        color: textColor.secondary,
      },
      default: {
        width: '100%',
        maxWidth: 180,
        height: unit * 3.5,
        borderRadius: unit * 3.5,
        backgroundColor: 'rgba(0,0,0,0.15)',
      },
    }),
  }),
);

export default SearchInput;
