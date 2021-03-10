import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './tab.js';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

