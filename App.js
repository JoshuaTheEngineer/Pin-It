import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapScreen from './screens/MapScreen';
import ContactScreen from './screens/ContactScreen';
import TestScreen from './screens/TestScreen';

const Tab = createBottomTabNavigator();

/**
 * The App Screen
 * @return {Object}
 */
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Contacts" component={ContactScreen} />
        <Tab.Screen name="Test" component={TestScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
