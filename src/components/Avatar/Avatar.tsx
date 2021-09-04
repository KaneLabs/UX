import * as React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  View,
  ImageURISource,
} from 'react-native';
import { makeStyles, Theme } from '@kanelabs/ux/theme';

export interface AvatarProps {
  source?: ImageSourcePropType;
  avatarUrl?: string;
  children: React.ReactNode;
  size?: number;
  style?: ImageStyle;
}

const Avatar: React.FC<AvatarProps> = ({
  source,
  avatarUrl,
  size,
  style,
  children,
}) => {
  const styles = useStyles();

  const overrideableStyles = React.useMemo(() => {
    const sizeStyles = {
      height: size,
      width: size,
      borderRadius: size,
    };
    return [styles.avatarPaper, size && sizeStyles, style];
  }, [size, style, styles.avatarPaper]);

  if (source || avatarUrl) {
    const imageSource = source || ({ uri: avatarUrl } as ImageURISource);
    return (
      <Image
        source={imageSource}
        style={overrideableStyles}
        children={children}
      />
    );
  }

  return <View style={overrideableStyles} children={children} />;
};

const useStyles = makeStyles((theme: Theme) => ({
  Avatar: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.borderColor,
    backgroundColor: theme.canvas,
    alignItems: 'center',
    height: theme.AVATAR_SIZE,
    width: theme.AVATAR_SIZE,
    borderRadius: theme.AVATAR_SIZE,
  },
}));

export default Avatar;
