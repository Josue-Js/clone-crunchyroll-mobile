import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';

function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#000"/>
      <Routes /> 
    </>
  );
}

export default App