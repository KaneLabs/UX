import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
// import { AccountAvatar } from 'eros-ui/components';
import { makeStyles } from 'eros-ui/theme';

const Multiline = ({
  mobile = false,
  flat = false,
  style,
  autoFocus = false,
  onChangeText = () => null,
  ...props
}) => {
  const [height, setHeight] = useState('auto');
  const [focused, setFocused] = useState(autoFocus);

  const onContentSizeChange = (event) => {
    const { height } = event.nativeEvent.contentSize;
    setHeight(height);
  };

  const onChange = (nextText) => {
    if (nextText.length === 0) {
      setHeight('auto');
    }
    return onChangeText(nextText);
  };

  return (
    <TextInput
      multiline
      blurOnSubmit={false}
      placeholder="What's up?"
      scrollEnabled={false}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onChangeText={onChange}
      onContentSizeChange={onContentSizeChange}
      style={[
        styles.multiline,
        mobile ? styles.mobile : styles.desktop,
        { height },
        flat && styles.flat,
        focused && !flat && styles.focused,
        style,
      ]}
      {...props}
    />
  );
};

const styles = makeStyles((theme) => ({
  multiline: {
    width: '100%',
    padding: unit,
    color: textColor.primary,
    borderRadius,
    borderColor: 'transparent',
    borderWidth,
  },
  flat: {
    borderWidth: 0,
  },
  focused: {
    borderColor: primaryColorOpaque,
  },
  mobile: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '300',
  },
  desktop: {
    fontSize: 21,
    lineHeight: 32,
    fontWeight: '300',
  },
}));

export default Multiline;
