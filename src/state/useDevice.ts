import { createContext } from 'react';
import { useQuery } from '@apollo/client';
import { DEVICE } from 'eros-ui/queries';

export const DimensionsContext = createContext(null);

const useDevice = () => {
  const { data } = useQuery(DEVICE);
  return (data && data.Device) || { type: 'desktop' };
};

export default useDevice;
