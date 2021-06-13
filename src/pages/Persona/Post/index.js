import React from 'react';
import {
  Container,
  PostContent,
  PersonaHeaderMain,
  Grid,
  NavPlaceholder,
  PostTitle,
  Followers,
  PersonaButtons,
  Row,
} from 'eros-ui/components';
import { FEED_WIDTH } from 'eros-ui/theme';
import { useDimensions, usePersona, usePost } from 'eros-ui/state';

export const PersonaPostPage = ({ handle, url }) => {
  const { mobile, width } = useDimensions();
  const persona = usePersona(handle);
  const post = usePost(url);
  console.log({ persona, post });
  if (!post) return null;

  return (
    <Grid center>
      <NavPlaceholder />
      <Container style={{ maxWidth: FEED_WIDTH }}>
        <PostTitle text={post && post.title} mobile={mobile} />
        <PersonaHeaderMain {...persona} mobile={mobile} />
        <Row fullWidth>
          <Row style={{ flex: 1, paddingHorizontal: 16 }}>
            <Followers followers={persona?.followers} />
          </Row>
          <PersonaButtons handle={handle} isMe={persona?.isMe} />
        </Row>
        <PostContent {...post} mobile={mobile} width={width} />
      </Container>
    </Grid>
  );
};

export default PersonaPostPage;
