import React, { createContext, useState, useContext, useEffect } from 'react';
// import { useQuery } from '@apollo/client';
// import { DEVICE } from '@kanelabs/ux/queries';
import { Dimensions } from 'react-native';
import { DESKTOP_BREAKPOINT } from '@kanelabs/ux/theme';

export const DimensionsContext = createContext(null);

export const DimensionsProvider = ({ children, initialLayout = 'mobile' }) => {
  const initialMobile = initialLayout === 'mobile';
  const initialDesktop = initialLayout === 'desktop';
  const initalState = {
    height: null,
    width: null,
    mobile: initialMobile,
    desktop: initialDesktop,
  };
  const [dimensions, setDimensions] = useState(initalState);

  useEffect(() => {
    const initialDimensions = Dimensions.get('window');
    const isMobile = initialDimensions.width < DESKTOP_BREAKPOINT;
    const isDesktop = initialDimensions.width >= DESKTOP_BREAKPOINT;
    setDimensions({
      ...initialDimensions,
      mobile: isMobile,
      desktop: isDesktop,
    });

    Dimensions.addEventListener('change', ({ window: windowDimensions }) => {
      const nextIsMobile = windowDimensions.width < DESKTOP_BREAKPOINT;
      const nextIsDesktop = windowDimensions.width >= DESKTOP_BREAKPOINT;
      setDimensions({
        ...windowDimensions,
        mobile: nextIsMobile,
        desktop: nextIsDesktop,
      });
    });

    return () => Dimensions.removeEventListener('change');
  }, [setDimensions]);

  return (
    <DimensionsContext.Provider value={{ ...dimensions }}>
      {children}
    </DimensionsContext.Provider>
  );
};

export const useDimensions = () => {
  const dimensions = useContext(DimensionsContext);
  return dimensions;
};

export default useDimensions;
