import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import * as Location from 'expo-location';

import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

/**
 * The App Screen
 * @return {Object}
 */
export default function App() {
  const [userLocation, setUserLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // ref
  const bottomSheetRef = useRef();

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    (async () => {
      const {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        setUserLocation({
          latitude: 35.6762,
          longitude: 139.6503,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      location = {
        latitude: parseFloat(location.coords.latitude),
        longitude: parseFloat(location.coords.longitude),
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      setUserLocation(location);
    })();
  }, []);

  if (userLocation) {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={userLocation}>
          <Text>{errorMsg}</Text>
          <Marker coordinate={userLocation} pinColor="red" />
          <Marker
            coordinate={{
              latitude: userLocation.latitude + 0.0005,
              longitude: userLocation.longitude + 0.0005,
            }}
            pinColor="green"
          />
        </MapView>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
        </BottomSheet>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={userLocation}
        />
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
        </BottomSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, // the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 36,
  },
});
