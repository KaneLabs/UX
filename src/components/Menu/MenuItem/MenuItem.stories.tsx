import React from 'react';
import { Text } from 'react-native';

import { MenuItem } from '@kanelabs/ux/components/Menu';
import Paper from '@kanelabs/ux/components/Paper';
import Divider from '@kanelabs/ux/components/Divider';
import Icon from '@kanelabs/ux/components/Icon';

import Header from '@kanelabs/ux-storybook/components/Header';
import Container from '@kanelabs/ux-storybook/components/Container';
import { storiesOf } from '@kanelabs/ux-storybook/helpers/storiesOf';

export default storiesOf('Components|Menu/MenuItem', module)
  .addParameters({ jest: ['MenuItem'] })
  .add('Simple', () => (
    <Container>
      <Header title="Menu Item" />

      <Paper style={{ width: 324 }}>
        <MenuItem text="Menu Item 1" />
        <MenuItem text="Menu Item 2" />
        <Divider />
        <MenuItem disabled text="Menu Item 3" />
        <MenuItem text="Menu Item 4" />
      </Paper>
    </Container>
  ))
  .add('with icon', () => (
    <Container>
      <Header title="Menu icons" />

      <Paper style={{ width: 324 }}>
        <MenuItem text="Preview" icon={<Icon name="assignment-turned-in" />} />
        <MenuItem text="Share" icon={<Icon name="person-add" />} />
        <MenuItem text="Get Link" icon={<Icon name="link" />} />
        <Divider />
        <MenuItem text="Preview" icon={<Icon name="content-copy" />} />
        <MenuItem text="Download" icon={<Icon name="file-download" />} />
      </Paper>
    </Container>
  ))
  .add('with keyboard', () => (
    <Container>
      <Header title="Menu keyboard commands" />

      <Paper style={{ width: 324 }}>
        <MenuItem
          text="Cut"
          icon={<Icon name="content-cut" />}
          keyboardCommand={
            <Text style={{ fontSize: 12, color: '#6e6e6e' }}>&#8984;X</Text>
          }
        />

        <MenuItem
          text="Copy"
          icon={<Icon name="content-copy" />}
          keyboardCommand={
            <Text style={{ fontSize: 12, color: '#6e6e6e' }}>&#8984;C</Text>
          }
        />

        <MenuItem
          text="Paste"
          icon={<Icon name="content-paste" />}
          keyboardCommand={
            <Text style={{ fontSize: 12, color: '#6e6e6e' }}>&#8984;V</Text>
          }
        />
      </Paper>
    </Container>
  ));
