import React from 'react';
import { ActivityIndicator, Container, Forum } from 'eros-ui/components';
import { FORUM } from 'eros-ui/queries';
import { useQuery } from '@apollo/client';
import NotFound from './ForumNotFound';

export const ForumPage = ({ url }) => {
  const options = { variables: { url } };
  const { data, error, loading } = useQuery(FORUM, options);
  const forum = data && data.Forum;
  if (forum) {
    return <Forum {...forum} />;
  }

  if (error && error.message === 'GraphQL error: "Forum Not Found."') {
    return <NotFound url={url} />;
  }

  if (loading) {
    return (
      <Container center>
        <ActivityIndicator />
      </Container>
    );
  }

  return null;
};

export default ForumPage;
