import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import Swiper from 'react-native-web-swiper';
import { unit } from 'eros-ui/theme';

import CreatorOwned from '../Heros/CreatorOwned';
import Distributed from '../Heros/Distributed';
import FreeTrade from '../Heros/FreeTrade';
import FreeSpeech from '../Heros/FreeSpeech';

export const HerosSwiper = (props) => (
  <Swiper
    loop
    timeout={5}
    springConfig={{ speed: 1, overshootClamping: true }}
    minDistanceForAction={0.15}
    positionFixed
    controlsEnabled={false}
    controlsProps={{
      DotComponent: ({ index, isActive, ...rest }) => (
        <TouchableOpacity
          {...rest}
          style={
            isActive
              ? {
                  borderRadius: 14,
                  margin: unit,
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  height: 28,
                  width: 28,
                }
              : {
                  borderRadius: 14,
                  margin: unit,
                  backgroundColor: 'rgba(255,255,255,0.0)',
                  borderColor: 'rgba(255,255,255,0.2)',
                  borderWidth: 2,
                  height: 28,
                  width: 28,
                }
          }
        />
      ),
      // PrevComponent: () => null,
      // NextComponent: () => null,
    }}
    testID="HerosSwiper"
    {...props}>
    <CreatorOwned />
    <Distributed />
    <FreeTrade />
    <FreeSpeech />
  </Swiper>
);

export default HerosSwiper;
