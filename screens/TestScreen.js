import React from 'react';
import {View, StyleSheet} from 'react-native';

import SearchLocationBar from '../components/SearchLocationBar';

/**
 *
 * @return {Screen}
 */
export default function TestScreen() {
  return (
    <View style={styles.container}>
      {/* TODO: Test SearchLocationBar for best visual design */}
      <SearchLocationBar
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, // the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
