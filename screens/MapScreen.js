import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import * as Location from 'expo-location';

import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

import DATA from '../data/contacts.json'

/**
 * The Map Screen
 * @return {Screen}
 */
 export default function MapScreen() {
    const [userLocation, setUserLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    
    /** Map */
    // ref 
    const mapRef = useRef();
    // methods 
    handleEditContactPress = (id) => {
      onChangeName(DATA[id].name)
      onChangeNumber(DATA[id].number)
      onChangeLocation(DATA[id].location.name)
      bottomSheetRef.current.expand();
    };
    moveToContactPress = (location) => mapRef.current.animateToRegion({
      latitude: parseFloat(location.latitude),
      longitude: parseFloat(location.longitude),
      latitudeDelta: 0.1,
      longitudeDelta: 0.1
    }, 1000 );

    /** Bottom Sheet */
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
  
    const Item = ({ id, name, phone, location }) => (
      <Pressable style={styles.item} onPress={() => moveToContactPress(location)}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phone}>{phone}</Text>
        <Text style={styles.location}>{location.name}</Text>
      </Pressable>
    );

    const renderItem = ({ item }) => (
      <Item id={item.id} name={item.name} phone={item.phone} location={item.location} />
    )

    const ContactMarker = ({id, location}) => (
      <Marker 
        key={id}
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        pinColor="green"
      />
    )

    if (userLocation) {
      return (
        <View style={styles.container}>
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={userLocation}>
            <Text>{errorMsg}</Text>
            <Marker 
              coordinate={userLocation} 
              pinColor="red" 
              image={require('../assets/chowder.png')}
            />
            {
              DATA.map((contact) => ContactMarker(contact))
            }
          </MapView>
          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <FlatList 
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
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
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    text: {
      fontSize: 36,
    },
  });
  