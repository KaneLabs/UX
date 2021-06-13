import React from 'react';
import { Container, Title, NavPlaceholder } from 'eros-ui/components';
import { StyleSheet } from 'react-native';
import ForumChat from './ForumChat';

export const Forum = (props) => (
  <Container>
    <NavPlaceholder />
    <Container style={{ flexDirection: 'row' }}>
      <Container center>
        <Title text={props.title} />
      </Container>
      <ForumChat forumId={props.id} />
    </Container>
  </Container>
);

export default Forum;
