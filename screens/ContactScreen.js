import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';

const DATA = [
  {
    name: 'Joshua Cadavez',
    phone: '1-911-911-9911',
    location: {
      name: 'Lakewood Ranch, FL',
      latitude: 27.387918,
      longitude: -82.43417
    }
  },
  {
    name: 'Jonathan Rameau',
    phone: '1-222-333-4444',
    location: {
      name: 'Sarasota, FL',
      latitude: 27.336433,
      longitude: -82.531136
    }
  },
  {
    name: 'Calvin Tran',
    phone: '1-555-678-9999',
    location: {
      name: 'Bradenton, FL',
      latitude: 27.498928,
      longitude: -82.574821
    }
  },
]

const Item = ({ name, phone, location }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.phone}>{phone}</Text>
    <Text style={styles.location}>{location.name}</Text>
  </View>
);

/**
 * The Contact Screen
 * @return {Screen}
 */
 export default function ContactScreen({ navigation }) {
    const renderItem = ({ item }) => (
      <Item name={item.name} phone={item.phone} location={item.location} />
    )
    return (
        <SafeAreaView style={styles.container}>
          <FlatList 
            data={DATA}
            renderItem={renderItem}
          />
        </SafeAreaView>
      );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    name: {
      fontSize: 32,
    },
    phone: {
      fontSize: 16,
    },
    location: {
      fontSize: 16,
    },
  });
  