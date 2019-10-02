import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FirstName from './FirstName'
import StudentID from './StudentID'
import Temporary2 from './Temporary2'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation'


const stackPage1 = createStackNavigator({
  FirstNameScreen:{screen:FirstName,navigationOptions: {
  title: 'FirstName'}},
});

const stackPage2 = createStackNavigator({
  FirstNameScreen:{screen:StudentID,navigationOptions: {
  title: 'StudentID'}},
});

const stackPage3 = createStackNavigator({
  Temporary2Screen:{screen:Temporary2,navigationOptions: {
  header: null }},
});

const navigator = createBottomTabNavigator({
    buttomPage1:{screen:stackPage1,navigationOptions: {
    title: 'FirstName'}},
    buttomPage2:{screen:stackPage2,navigationOptions: {
    title: 'StudentID'}},
    buttomPage3:{screen:stackPage3,navigationOptions: {
    title: 'ETC'}},
  })


export default createAppContainer(navigator);
