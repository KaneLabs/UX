import { merge } from 'lodash';

import account from './account';
import device from './device';
import drawer from './drawer';
import modals from './modals';
import nav from './nav';
import socialDrawer from './socialDrawer';

export const resolvers = merge(
  account,
  nav,
  device,
  modals,
  drawer,
  socialDrawer,
);
export default resolvers;
