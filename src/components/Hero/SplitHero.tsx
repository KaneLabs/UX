import React from 'react';
import { View, ImageBackground } from 'react-native';
import { useDimensions } from 'eros-ui/state';
import { makeStyles } from 'eros-ui/theme';
import { Title, Subtitle } from '../Typography';

export const SplitHero = ({
  source,
  title,
  subtitle,
  imageSide = 'left',
  SubtitleComponent = null,
  backgroundColor = null,
  children = null,
}) => {
  const { mobile } = useDimensions();
  const styles = useStyles();

  if (mobile) {
    return (
      <View style={[styles.verticalContainer]}>
        <ImageBackground style={styles.heroImageFull} source={source}>
          <View style={styles.textContainer}>
            <Title
              type={3}
              style={styles.heroTitleMobile}
              accessibilityRole="header">
              {title}
            </Title>

            {SubtitleComponent || (
              <Subtitle
                style={styles.heroSubtitleMobile}
                accessibilityRole="header"
                aria-level="2"
                gutter>
                {subtitle}
              </Subtitle>
            )}
          </View>
          {children}
        </ImageBackground>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.horizontalContainer,
        backgroundColor && { backgroundColor },
      ]}>
      {imageSide === 'left' && (
        <ImageBackground style={styles.heroImageSplit} source={source} />
      )}

      <View style={[styles.container]}>
        <View style={styles.textContainer}>
          <Title type={1} style={styles.heroTitle} accessibilityRole="header">
            {title}
          </Title>
          {SubtitleComponent || (
            <Subtitle
              style={styles.heroSubtitle}
              accessibilityRole="header"
              aria-level="2"
              gutter>
              {subtitle}
            </Subtitle>
          )}
          {children}
        </View>
      </View>

      {imageSide === 'right' && (
        <ImageBackground style={styles.heroImageSplit} source={source} />
      )}
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  horizontalContainer: {
    flexDirection: 'row',
    // flex: 1,
    height: '100vh',
    width: '100vw',
  },
  verticalContainer: {
    flexDirection: 'column',
    // flex: 1,
    height: '100vh',
    width: '100vw',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    // height: '100%',
    // width: '100%',
  },
  splitContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100vh',
    width: '50vw',
    padding: theme.gutter,
  },
  heroImageFull: {
    flex: 1,
    width: '100vw',
    height: '100vh',
    // justifyContent: 'flex-end',
    paddingBottom: theme.gutter * 5,
  },
  heroImageSplit: { height: '100%', width: '50vw', flex: 1 },
  link: {
    color: 'blue',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: theme.unit * 2.5,
    paddingVertical: theme.unit * 7,
  },
  heroTitle: { textAlign: 'center', marginBottom: theme.gutter },
  heroTitleMobile: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: theme.gutter,
  },
  heroSubtitle: { textAlign: 'center', fontSize: 20, color: '#FFF' },
  heroSubtitleMobile: { textAlign: 'center', fontSize: 20, color: '#FFF' },
}));

export default SplitHero;
