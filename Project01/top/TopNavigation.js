import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const stackPage1 = createStackNavigator({
  Page1Screen:{screen:Page1,navigationOptions: {
    header: null}},
});

const stackPage2 = createStackNavigator({
  Page2Screen:{screen:Page2,navigationOptions: {
    header: null }},
});

const stackPage3 = createStackNavigator({
  Page3Screen:{screen:Page3,navigationOptions: {
    header: null }},
});




const navigator = createMaterialTopTabNavigator({
    buttomPage1:{screen:stackPage1,navigationOptions: {}},
    buttomPage2:{screen:stackPage2,navigationOptions: {}},
    buttomPage3:{screen:stackPage3,navigationOptions: {}},
  })


export default createAppContainer(navigator);
