import React from 'react';
import { View, Platform } from 'react-native';
import { Avatar, Title, Caption, Row } from '@kanelabs/ux/components';

export const DrawerHeader = ({ avatarUrl, display, handle }) => (
  <View style={{ paddingHorizontal: 8, paddingVertical: 8 }}>
    <Row>
      <View style={{ alignItems: 'center' }}>
        <View style={{ padding: Platform.OS === 'web' ? 0 : 8 }}>
          <Avatar
            avatarUrl={avatarUrl}
            size={Platform.OS === 'web' ? 32 : 48}
          />
        </View>
        <Caption text={`@${handle}`} />
      </View>
    </Row>
  </View>
);

export default DrawerHeader;
