import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNavigationContainer, StackRouter, createNavigator, CardStack } from 'react-navigation'
import { ScreenTwo as ScreenOne } from './screen_one'
import { ScreenTwo } from './screen_two'
import CustomNavigator from './CustomNavigator'
import routeConfig from './routes' 


const App = CustomNavigator(routeConfig, {
  initialRouteName: 'Home',
  headerMode: 'none',
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
