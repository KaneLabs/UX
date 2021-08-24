import React from 'react';
import {
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemMedia,
  ListSubtitle,
} from 'eros-ui/components';
import { FORUM_MEMBERS } from 'eros-ui/queries';
import { useQuery } from '@apollo/client';

// <ListSubtitle text="Members" dense />
export const ForumMembersList = ({ forumId, onPressMember }) => {
  const options = { variables: { forumId } };
  const { data, error, loading } = useQuery(FORUM_MEMBERS, options);
  const members = data && data.ForumMembers;
  return (
    <List dense>
      {data &&
        data.ForumMembers &&
        data.ForumMembers.map((member) => {
          const { id, avatarUrl, handle, display } = member;
          return (
            <ListItem onPress={() => onPressMember(member)} dense key={id}>
              <ListItemMedia dense>
                <Avatar avatarUrl={avatarUrl} size={28} />
              </ListItemMedia>
              <ListItemText text={handle} />
            </ListItem>
          );
        })}
    </List>
  );
};

export default ForumMembersList;
