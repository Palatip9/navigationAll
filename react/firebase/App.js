import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopNavigator from './components/TopNavigator.js';
export default class App extends React.Component {
  render()
  {
  return (
    <View style={{flex: 1}}>
      <TopNavigator/>

    </View>
    );
  }
}
