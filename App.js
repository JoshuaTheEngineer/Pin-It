import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps';

export default function App() {
  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    //extra code removed for brevity.
    //create a Hook to store our region data.
    <View style={styles.container}>
      
      <MapView
        style={styles.map}
        initialRegion={tokyoRegion}
      >
        {/*Make sure the Marker component is a child of MapView. Otherwise it won't render*/}
        <Marker coordinate={tokyoRegion} pinColor="red" />
        {/*marker to a nearby location */}
        <Marker
          coordinate={{
            latitude: 35.67714827145542,
            longitude: 139.6551462687416,
          }}
          pinColor="green"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 36
  }
});
