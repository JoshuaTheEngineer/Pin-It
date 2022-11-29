import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

/**
 * The Contact Screen
 * @return {Screen}
 */
 export default function ContactScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Hello World</Text>
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
    text: {
      fontSize: 36,
    },
  });
  