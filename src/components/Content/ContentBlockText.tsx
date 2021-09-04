import React from 'react';
import { gutter } from '@kanelabs/ux/theme';
import { BodyText } from '../Typography';

const ContentBlockText = ({ text, mobile = false }) => (
  <BodyText text={text} style={mobile ? styles.mobile : styles.desktop} />
);

const styles = {
  desktop: {
    fontSize: 21,
    fontWeight: '300',
    lineHeight: 32,
    paddingLeft: gutter,
    paddingRight: gutter,
    paddingBottom: gutter,
  },
  mobile: {
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 24,
    paddingLeft: gutter,
    paddingRight: gutter,
    paddingBottom: gutter,
  },
};

export default ContentBlockText;
