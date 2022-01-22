import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Nearby from './Nearby';
import Popular from './Popular';

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
      <Tab.Navigator style={{paddingTop:30}} initialLayout={Popular}>
    <Tab.Screen name="Nearby" component={Nearby} options={{ title:"Nearby" }} />
    <Tab.Screen name="Popular" component={Popular} />
  </Tab.Navigator>
  );
}
