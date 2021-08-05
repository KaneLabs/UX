export default Menu;
declare class Menu extends React.Component<any, any, any> {
  static propTypes: {
    button: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    visible: PropTypes.Requireable<boolean>;
    menuStyle: PropTypes.Requireable<object>;
    sameWidth: PropTypes.Requireable<boolean>;
    onBackdropPress: PropTypes.Requireable<(...args: any[]) => any>;
    modalMenuStyle: PropTypes.Requireable<object>;
    contentContainerStyle: PropTypes.Requireable<object>;
    noBackDrop: PropTypes.Requireable<boolean>;
    tooltip: PropTypes.Requireable<boolean>;
    tooltipPosition: PropTypes.Requireable<string>;
    testID: PropTypes.Requireable<string>;
    fullWidth: PropTypes.Requireable<boolean>;
  };
  constructor(props: any);
  constructor(props: any, context: any);
  onModalMenuLayout: (e: any) => void;
  onButtonLayout: (e: any) => void;
  onMenuLayout: (e: any) => void;
  toggle(): void;
  marker: View | null | undefined;
}
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
