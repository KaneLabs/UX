import React from 'react';
import { SafeAreaView, ImageBackground } from 'react-native';
import { useDimensions } from 'eros-ui/state';
import { makeStyles } from 'eros-ui/theme';
import { Subtitle, Title } from '../Typography';

export const VerticalHero = ({
  title,
  subtitle,
  SubtitleComponent = null,
  ...rest
}) => {
  const { width, height } = useDimensions();
  const styles = useStyles();

  return (
    <ImageBackground
      style={[styles.imageBackground, { width, height }]}
      {...rest}>
      <SafeAreaView style={styles.textContainer}>
        {title && (
          <Title text={title} type={4} style={styles.heroTitle} gutter />
        )}

        {SubtitleComponent ||
          (subtitle ? (
            <Subtitle text={subtitle} style={styles.heroSubtitle} />
          ) : null)}
      </SafeAreaView>
    </ImageBackground>
  );
};

const useStyles = makeStyles((theme) => ({
  imageBackground: {
    alignItems: 'center',
    flex: 1,
    // justifyContent: 'flex-end',
  },
  link: {
    color: 'blue',
  },
  textContainer: {
    alignItems: 'center',
    // paddingHorizontal: 8,
    // paddingVertical: 8 * 5,
    // width: '100%',
  },
  heroTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: theme.gutter,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#FFF',
    position: 'absolute',
    marginTop: 44,
    width: '100%',
    textAlign: 'center',
  },
}));
