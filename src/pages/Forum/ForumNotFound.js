import React from 'react';
import { Container, Title } from '@kanelabs/ux/components';
import Link from 'next/link';

export const ForumNotFound = ({ url }) => (
  <Container center>
    <Title type={4} text="Forum Not Found :`/ " gutter />
    <Link passHref href="/[creator]/create" as={`/${url}/create`}>
      <Title href="/[creator]/create" type={3} text="Claim It?" gutter />
    </Link>
  </Container>
);

export default ForumNotFound;
