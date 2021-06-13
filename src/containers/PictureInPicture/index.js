import React from 'react';
import { useDrawer, useTheme } from 'eros-ui/components';
import { Video, VideoSource } from 'eros-ui/components';

const PictureInPicture = () => {
  const { open } = useDrawer();
  const [{ TOOLBAR_WIDTH_OPEN, TOOLBAR_WIDTH_CLOSED, unit }] = useTheme();
  const left = open ? TOOLBAR_WIDTH_OPEN + unit : TOOLBAR_WIDTH_CLOSED + unit;

  return (
    <Video
      controls
      style={{
        height: 180, width: 320, left, bottom: unit, position: 'fixed',
      }}
    >
      <VideoSource src="/videos/Grant Howards Alta Line_1080p.mp4" type="video/mp4" />
      <VideoSource src="/videos/Grant Howards Alta Line_1080p.ogg" type="video/ogg" />
      Your browser does not support the video tag.
    </Video>
  );
};

export default PictureInPicture;
