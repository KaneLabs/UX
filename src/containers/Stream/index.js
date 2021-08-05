import React from 'react';
import { Button } from 'react-native';

import {
  NodePlayerView,
  NodeCameraView,
} from '@fora/react-native-stream-client';

// const TWITCH_RTMP = 'rtmp://live.twitch.tv/app/live_467231577_KRbBJwOjAF7Rsqf4JHwhSutbHJZjew';
const LOCALHOST_RTMP = 'rtmp://192.168.1.13:1935/live/stream';

// import {ActionButton} from '../../native/src/ui/src/ActionButton';

const mapBitrate = (resolution = '1080p', fps = 60) => {
  if (resolution === '1080p' && fps === 60) {
    return 6000000;
  }

  if (resolution === '900p' && fps === 60) {
    return 6000000;
  }

  if (resolution === '720p' && fps === 60) {
    return 4500000;
  }

  if (resolution === '720p' && fps === 30) {
    return 3000000;
  }
};

export default class Stream extends React.Component {
  state = {
    publishBtnTitle: 'Start Publish',
    isPublish: false,
  };

  onStatus = (event) => {
    console.log('streaming event', event);
  };

  switchCamera = () => {
    this.vb.switchCamera();
  };

  render() {
    return (
      <>
        <NodeCameraView
          style={{ flex: 1 }}
          ref={(vb) => {
            this.vb = vb;
          }}
          outputUrl={LOCALHOST_RTMP}
          camera={{ cameraId: 1 }}
          audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
          video={{
            preset: 12,
            bitrate: mapBitrate('1080p', 60),
            profile: 1,
            fps: 20,
            videoFrontMirror: false,
          }}
          autopreview
          onStatus={this.onStatus}
        />

        <Button onPress={this.switchCamera} title="Switch Camera" />

        <Button
          onPress={() => {
            if (this.state.isPublish) {
              this.setState({
                publishBtnTitle: 'Start Publish',
                isPublish: false,
              });
              this.vb.stop();
            } else {
              this.setState({
                publishBtnTitle: 'Stop Publish',
                isPublish: true,
              });
              this.vb.start();
            }
          }}
          title={this.state.publishBtnTitle}
          color="#841584"
        />
      </>
    );
  }
}
