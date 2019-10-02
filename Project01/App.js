import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import StackNavigation from './stack/StackNavigation.js';
import DrawerNavigation from './drawer/DrawerNavigation.js';
import BottomNavigation from './bottom/BottomNavigation.js';
import TopNavigation from './top/TopNavigation.js';
//import MixNavigator from './mix/SwitchNavigator.js';
import JobNavigator from './job/SwitchNavigator.js';
export default class App extends React.Component {
  render()
  {
  return (
    <View style={{flex: 1,marginTop:StatusBar.currentHeight}}>
      <JobNavigator/>

    </View>
    );
  }
}
