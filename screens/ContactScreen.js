import React, {useRef, useMemo, useCallback} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, StatusBar, Button, TextInput} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {FAB} from 'react-native-paper';

import ContactItem from '../components/ContactItem';

import DATA from '../data/contacts.json';

/**
 * The Contact Screen
 * @return {Screen}
 */
export default function ContactScreen() {
  const [name, onChangeName] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [location, onChangeLocation] = React.useState('');
  // ref
  const bottomSheetRef = useRef();

  // variables
  const snapPoints = useMemo(() => ['25%', '75%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  // methods
  const handleOpenPress = () => bottomSheetRef.current.expand();
  const handleClosePress = () => {
    onChangeName('');
    onChangeNumber('');
    onChangeLocation('');
    bottomSheetRef.current.close();
  };
  const handleCreateContactPress = () => {
    if (name.trim() == '' || number == '' || location.trim() == '') {
      console.log('EMPTY!!!!!');
      return;
    }
    DATA.push({
      id: DATA.length,
      name: name,
      phone: number,
      location: {
        name: location,
        latitude: 27.336433,
        longitude: -82.531136,
      },
    });
    onChangeName('');
    onChangeNumber('');
    onChangeLocation('');
    bottomSheetRef.current.close();
  };
    // TODO: Get Edit Contact to work!
  handleEditContactPress = (id) => {
    onChangeName(DATA[id].name);
    onChangeNumber(DATA[id].number);
    onChangeLocation(DATA[id].location.name);
    bottomSheetRef.current.expand();
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <ContactItem
            id={item.id}
            name={item.name}
            phone={item.phone}
            location={item.location}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View>
          <Button
            onPress={handleClosePress}
            title="Close"
            color="#841584"
            accessibilityLabel="Close with this purple button"
          />
          <TextInput
            style={styles.input}
            onChangeText={(name) => onChangeName(name)}
            value={name}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={(number) => onChangeNumber(number)}
            value={number}
            placeholder="Phone Number"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={(location) => onChangeLocation(location)}
            value={location}
            placeholder="Location"
          />
          <Button
            onPress={handleCreateContactPress}
            title="Create Contact"
            color="#841584"
            accessibilityLabel="Create Contact this purple button"
          />
        </View>
      </BottomSheet>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={handleOpenPress}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
