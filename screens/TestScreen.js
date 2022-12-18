import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function TestScreen() {
    return (
        <View style={styles.container}>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1, // the container will fill the whole screen.
      justifyContent: 'flex-end',
      alignItems: 'center',
    }
});