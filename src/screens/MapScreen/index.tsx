/* eslint complexity: 0 */
import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Permissions, { PERMISSIONS, RESULTS } from 'react-native-permissions';
import IconButton from '@kanelabs/ux/components/IconButton';

import { makeStyles, useTheme, ThemeModes } from '@kanelabs/ux/theme';
// import companies from '../../../companies';

import { GeoPosition } from 'react-native-geolocation-service';
// import { useNavigation } from '@react-navigation/native';

// const LATITUDE_DELTA = 0.1;
// const LONGITUDE_DELTA = 0.1;
const LATITUDE = 40.0051549;
const LONGITUDE = -105.2805633;
const LATITUDE_DELTA_CLOSE = 0.7;
const LONGITUDE_DELTA_CLOSE = 0.7;

interface Location {
  coordinates: [number, number];
}

interface LatLng {
  latitude: number;
  longitude: number;
}

interface Bounds {
  northEast: LatLng;
  southWest: LatLng;
}

const INITIAL_LATLNG: LatLng = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
};

const INITIAL_DELTA = {
  latitudeDelta: LATITUDE_DELTA_CLOSE * 100,
  longitudeDelta: LONGITUDE_DELTA_CLOSE * 100,
};

const INITIAL_REGION = {
  ...INITIAL_LATLNG,
  ...INITIAL_DELTA,
};

// const INITIAL_CAMERA = {
//   center: {
//     ...INITIAL_LATLNG,
//   },
//   zoom: 15,
//   pitch: 1,
//   heading: 1,
//   altitude: 1,
// };

const BOTTOM_OFFSET = 56;

const Map = () => {
  const [latLng, setLatLng] = useState<LatLng>(INITIAL_LATLNG);
  const [mapBounds, setMapBounds] = useState<Bounds>();
  const mapView = React.useRef<MapView>();

  // const colorScheme = useColorScheme();
  const [theme] = useTheme();
  // const [touched, isTouched] = useState(false);

  const [region, setRegion] = useState<Region>(INITIAL_REGION);

  React.useEffect(() => {
    const getMapBounds = async () => {
      const nextMapBounds = await mapView?.current?.getMapBoundaries();
      console.log({ nextMapBounds });
      setMapBounds(nextMapBounds);
    };

    getMapBounds();
  }, [region]);

  const onMapReady = async () => {
    checkPermissions();
    const nextMapBounds = await mapView?.current?.getMapBoundaries();
    setMapBounds(nextMapBounds);
  };

  const getCurrentPosition = () => {
    console.log('in getCurrentPosition');
    try {
      const position = Geolocation.getCurrentPosition(
        locationSuccess,
        locationError,
        {
          enableHighAccuracy: true,
        },
      );
      console.log({ position });

      return position;
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const locationSuccess = async (position: GeoPosition) => {
    console.log({ locationSuccess: position });
    const {
      coords: { latitude, longitude },
    } = position;
    const nextLatLng = { latitude, longitude };
    setLatLng(nextLatLng);
    const nextDeltas = {
      latitudeDelta: LATITUDE_DELTA_CLOSE,
      longitudeDelta: LONGITUDE_DELTA_CLOSE,
    };
    const nextRegion = { ...nextLatLng, ...nextDeltas };

    // const setLocationResponse = await setLocation({ variables: nextLatLng });
    setRegion(nextRegion);
    mapView?.current?.animateToRegion(nextRegion, 500);
  };

  const locationError = (error: any) => {
    console.log({ locationError: error });
    switch (error.code) {
      case 1:
        return handlePermissionDenied();
      default:
        return null;
    }
  };

  const handlePermissionDenied = () => {
    // setLocationPermission(false);
  };

  const checkPermissions = async () => {
    const response = await Permissions.check(
      PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    );

    console.log('response', response);

    switch (response) {
      case RESULTS.UNAVAILABLE:
        console.log(
          'This feature is not available (on this device / in this context)',
        );
        break;
      case RESULTS.DENIED:
        console.log(
          'The permission has not been requested / is denied but requestable',
        );
        await Permissions.request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        getCurrentPosition();
        break;
      case RESULTS.LIMITED:
        console.log('The permission is limited: some actions are possible');
        break;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        getCurrentPosition();
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        break;
    }
  };

  const navToSelf = () => {
    const deltas = {
      latitudeDelta: 0.2,
      longitudeDelta: 0.2,
    };

    mapView?.current?.animateToRegion({ ...latLng, ...deltas }, 500);
  };

  const customMapStyle = React.useMemo(() => {
    return theme.mode === ThemeModes.dark
      ? require('./mapStyleDark.json')
      : require('./mapStyleLight.json');
  }, [theme.mode]);

  const styles = useStyles();
  return (
    <>
      <MapView
        ref={mapView}
        initialRegion={region}
        onRegionChangeComplete={setRegion}
        onMapReady={onMapReady}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={customMapStyle}
        mapPadding={{ left: 12, bottom: BOTTOM_OFFSET, right: 12, top: 12 }}
        showsUserLocation
        showsCompass
        testID="Map">
        {/* {latLng && <Marker pinColor={'#f5e561'} coordinate={latLng} />} */}
      </MapView>

      <IconButton
        onPress={navToSelf}
        name={'locate-outline'}
        size={40}
        style={styles.navToSelfButton}
      />
    </>
  );
};

const useStyles = makeStyles((theme?: any) => ({
  map: { flex: 1 },
  header: {
    paddingTop: 8,
    // padding: 20,
    paddingBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchFieldFocusStyle: {
    backgroundColor: theme.canvas,
    borderColor: theme.canvas,
  },
  searchField: {
    flex: 1,
    marginLeft: theme.padding,
    backgroundColor: theme.canvas,
    borderColor: theme.borderColor,
    borderWidth: theme.borderWidth,
    borderRadius: 40,
    fontSize: 20,
    lineHeight: 28,
    height: 40,
  },
  navToSelfButton: {
    position: 'absolute',
    zIndex: 10,
    right: 0,
    bottom: BOTTOM_OFFSET + 16,
  },
}));

export default Map;
