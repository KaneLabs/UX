import React from 'react';
import { TouchableOpacityProps } from 'react-native';
export interface ListItemProps extends TouchableOpacityProps {
    dense?: boolean;
}
declare const ListItem: React.FC<ListItemProps>;
export default ListItem;
