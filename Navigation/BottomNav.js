import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from '../tabs/SearchScreen';
import ExploreScreen from '../tabs/ExploreScreen';
import TripsScreen from '../tabs/TripsScreen';
import ProfileScreen from '../tabs/ProfileScreen';
import {CustomCalendar} from '../tabs/CustomCalendar';
import Icon from 'react-native-vector-icons/FontAwesome5';


const TabNavigator = createBottomTabNavigator({

    Search: {
      screen :SearchScreen,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({tintColor}) => (
          <Icon name="cloud-moon" size={18} color={tintColor} style={styles.icons}/>
          
        )
      }
    },
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarLabel: "Explore",
        tabBarIcon: ({tintColor}) => (
          <Icon name="eye" size={18} color={tintColor} style={styles.icons}/>
          
        )
      }
    },
    Trips: {
      screen: TripsScreen,
      navigationOptions: {
        tabBarLabel: "Trips",
        tabBarIcon: ({tintColor}) => (
          <Icon name="suitcase-rolling" size={18} color={tintColor} style={styles.icons}/>
          
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({tintColor}) => (
          <Icon name="user-circle" size={18} color={tintColor} style={styles.icons}/>
          
        )
      }
    
    },
    
  },
  {
    order: ['Search', 'Explore', 'Trips', 'Profile'],
    tabBarOptions: {
      activeTintColor: 'skyblue',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      }
    },
  },);
  export default createAppContainer(TabNavigator);



  
const styles = StyleSheet.create({
    container: {
        
    }
})