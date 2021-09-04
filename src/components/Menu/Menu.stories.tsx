import React from 'react';
import { View } from 'react-native';

import { State, Store } from '@sambego/storybook-state';
import { Menu, MenuItem, Button, IconButton, Heading } from '../..';
import Header from '@kanelabs/ux-storybook/components/Header';
import Container from '@kanelabs/ux-storybook/components/Container';
import { storiesOf } from '@kanelabs/ux-storybook/helpers/storiesOf';

const store = new Store({
  visibleOne: false,
  visibleTwo: false,
  visibleThree: false,
  visibleFour: false,
  visibleFive: false,
});

export default storiesOf('Components|Menu', module)
  .addParameters({ jest: ['Menu'] })
  .add('Simple', () => (
    <Container>
      <Header title="Menu" />
      <Heading style={{ marginBottom: 10 }}>On the left</Heading>
      <State store={store} style={{ flex: 1 }}>
        {(state) => (
          <View style={{ marginBottom: 40 }}>
            <Menu
              menuStyle={{ width: 324 }}
              visible={state.visibleOne}
              onBackdropPress={() => {
                store.set({ visibleOne: false });
              }}
              button={
                <Button
                  text="Show menu"
                  onPress={() => {
                    store.set({ visibleOne: !state.visibleOne });
                  }}
                  type="contained"
                />
              }>
              <MenuItem
                text="Menu Item 1"
                onPress={() => store.set({ visibleOne: false })}
              />
              <MenuItem
                text="Menu Item 2"
                onPress={() => store.set({ visibleOne: false })}
              />
              <MenuItem
                text="Menu Item 3"
                disabled
                onPress={() => store.set({ visibleOne: false })}
              />
              <MenuItem
                text="Menu Item 4"
                onPress={() => store.set({ visibleOne: false })}
              />
            </Menu>
          </View>
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {(state) => (
          <View>
            <Menu
              menuStyle={{ width: 324 }}
              visible={state.visibleTwo}
              onBackdropPress={() => {
                store.set({ visibleTwo: false });
              }}
              button={
                <IconButton
                  name="more-vert"
                  onPress={() => {
                    store.set({ visibleTwo: !state.visibleTwo });
                  }}
                  size={24}
                />
              }>
              <MenuItem
                text="Menu Item 1"
                onPress={() => store.set({ visibleTwo: false })}
              />
              <MenuItem
                text="Menu Item 2"
                onPress={() => store.set({ visibleTwo: false })}
              />
              <MenuItem
                text="Menu Item 3"
                disabled
                onPress={() => store.set({ visibleTwo: false })}
              />
              <MenuItem
                text="Menu Item 4"
                onPress={() => store.set({ visibleTwo: false })}
              />
            </Menu>
          </View>
        )}
      </State>
      <Heading
        style={{ marginBottom: 10, marginTop: 50, alignSelf: 'flex-end' }}>
        On the Right
      </Heading>
      <State store={store} style={{ flex: 1 }}>
        {(state) => (
          <View style={{ alignItems: 'flex-end', marginBottom: 40 }}>
            <Menu
              visible={state.visibleThree}
              onBackdropPress={() => {
                store.set({ visibleThree: false });
              }}
              sameWidth
              button={
                <Button
                  text="Show menu"
                  onPress={() => {
                    store.set({ visibleThree: !state.visibleThree });
                  }}
                  type="contained"
                />
              }>
              <MenuItem
                text="Menu Item 1"
                style={{ paddingHorizontal: '12%' }}
                onPress={() => store.set({ visibleThree: false })}
              />
              <MenuItem
                text="Menu Item 2"
                style={{ paddingHorizontal: '12%' }}
                onPress={() => store.set({ visibleThree: false })}
              />
              <MenuItem
                text="Menu Item 3"
                style={{ paddingHorizontal: '12%' }}
                disabled
                onPress={() => store.set({ visibleThree: false })}
              />
              <MenuItem
                text="Menu Item 4"
                style={{ paddingHorizontal: '12%' }}
                onPress={() => store.set({ visibleThree: false })}
              />
            </Menu>
          </View>
        )}
      </State>
      <State store={store} style={{ flex: 1 }}>
        {(state) => (
          <View style={{ alignItems: 'flex-end' }}>
            <Menu
              visible={state.visibleFour}
              onBackdropPress={() => {
                store.set({ visibleFour: false });
              }}
              button={
                <IconButton
                  name="more-vert"
                  onPress={() => {
                    store.set({ visibleFour: !state.visibleFour });
                  }}
                  size={24}
                />
              }>
              <MenuItem
                text="Menu Item 1"
                onPress={() => store.set({ visibleFour: false })}
              />
              <MenuItem
                text="Menu Item 2"
                onPress={() => store.set({ visibleFour: false })}
              />
              <MenuItem
                text="Menu Item 3"
                disabled
                onPress={() => store.set({ visibleFour: false })}
              />
              <MenuItem
                text="Menu Item 4"
                onPress={() => store.set({ visibleFour: false })}
              />
            </Menu>
          </View>
        )}
      </State>
    </Container>
  ))
  .add('Scrolling', () => (
    <Container>
      <Header title="Menu" />

      <State store={store} style={{ flex: 1 }}>
        {(state) => (
          <View style={{ marginBottom: 40 }}>
            <Menu
              menuStyle={{ width: 324, maxHeight: 200 }}
              visible={state.visibleFive}
              onBackdropPress={() => {
                store.set({ visibleFive: false });
              }}
              button={
                <Button
                  text="Show menu"
                  onPress={() => {
                    store.set({ visibleFive: !state.visibleFive });
                  }}
                  type="contained"
                />
              }>
              <MenuItem
                text="Menu Item 1"
                onPress={() => store.set({ visibleFive: false })}
              />
              <MenuItem
                text="Menu Item 2"
                onPress={() => store.set({ visibleFive: false })}
              />
              <MenuItem
                text="Menu Item 3"
                disabled
                onPress={() => store.set({ visibleFive: false })}
              />
              <MenuItem
                text="Menu Item 4"
                onPress={() => store.set({ visibleFive: false })}
              />
              <MenuItem
                text="Menu Item 5"
                onPress={() => store.set({ visibleFive: false })}
              />
              <MenuItem
                text="Menu Item 6"
                onPress={() => store.set({ visibleFive: false })}
              />
              <MenuItem
                text="Menu Item 7"
                disabled
                onPress={() => store.set({ visibleFive: false })}
              />
              <MenuItem
                text="Menu Item 8"
                onPress={() => store.set({ visibleFive: false })}
              />
            </Menu>
          </View>
        )}
      </State>
    </Container>
  ));
