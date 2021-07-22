import { useQuery } from '@apollo/react-hooks';
import { NAV } from '../queries';

export const useNavDocked = () => {
  const { data: navData } = useQuery(NAV);
  const docked = navData && navData.Nav && navData.Nav.docked;
  return docked;
};

export default useNavDocked;
