import React from 'react';
import { TabBar, Tab } from 'eros-ui/components';
// view-day icon for feed on Material
// cash-register icon is pretty cool
const PersonaTabBar = () => (
  <TabBar>
    <Tab iconName="ios-menu" text="Feed" />
    <Tab iconName="ios-apps" text="Media" />
    <Tab iconName="ios-cash" text="Market" />
  </TabBar>
);

export default PersonaTabBar;
