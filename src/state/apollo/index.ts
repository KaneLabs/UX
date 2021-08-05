import { useQuery } from '@apollo/react-hooks';
import { ME, DRAWER, SOCIAL_DRAWER, NAV, PERSONA, POST } from 'eros-ui/queries';

export const useAccount = () => {
  const { data } = useQuery(ME);
  const account = data && data.Me;
  return account;
};

export const useDrawer = () => {
  const query = useQuery(DRAWER);
  return query && query.data && query.data.Drawer;
};

export const useSocialDrawer = () => {
  const query = useQuery(SOCIAL_DRAWER);
  return query && query.data && query.data.SocialDrawer;
};

export const useNav = () => {
  const { data } = useQuery(NAV);
  return data && data.Nav;
};

export const usePersona = (handle) => {
  const { data: personaData } = useQuery(PERSONA, { variables: { handle } });
  const persona = personaData && personaData.Persona;
  return persona;
};

export const usePost = (url) => {
  const { data: postData } = useQuery(POST, { variables: { id: url } });
  const post = postData && postData.Post;
  return post;
};
