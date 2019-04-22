/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet,TouchableHighlight,Modal, TextInput, Text, View} from 'react-native';


import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {DateRangePicker} from './tabs/DateRangePicker';
import {Information} from './tabs/Information';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomNav from './Navigation/BottomNav';
import { CustomCalendar } from './tabs/CustomCalendar';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends React.Component
 {
   constructor(){
     super();
     this.state={
      searching: true,
      showCalendar: false
     }
     this.toggleSearch = this.toggleSearch.bind(this)
     this.toggleCalendar = this.toggleCalendar.bind(this)
   }

   toggleSearch(){
    this.setState({searching:!this.state.searching})
   }
   toggleCalendar(){
     this.setState({showCalendar:!this.state.showCalendar})
   }
  render(){
    return(
      <View style={styles.container}>
       <BottomNav toggleSearch={this.toggleSearch}/>
        {/* <CustomCalendar toggleCalendar={this.toggleCalendar} /> */}
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: 'darkgray',
  },
  
});
  