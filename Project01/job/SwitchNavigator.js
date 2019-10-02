import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Login from './Login.js'
import Temporary1 from './Temporary1.js'
import { createSwitchNavigator,createAppContainer} from 'react-navigation'

const navigator = createSwitchNavigator({
    LoginScreen:{screen:Login,navigationOptions: {
    title: 'Login'}},
    Temporary1Screen:{screen:Temporary1,navigationOptions: {
    title: 'Temporary1'}},
  });

export default createAppContainer(navigator);
