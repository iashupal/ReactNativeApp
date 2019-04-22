import React from 'react';  
import {Platform, StyleSheet,TouchableHighlight,Modal, TextInput, Text, View} from 'react-native';
import Calendar from 'react-native-calendar-select';
import { Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class DateRangePicker extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      startDate: new Date(2015, 6, 12),  
      endDate: new Date(2020, 12, 31)
    };
    this.confirmDate = this.confirmDate.bind(this);
    this.openCalendar = this.openCalendar.bind(this);
  }
  // when confirm button is clicked, an object is conveyed to outer component
  // contains following property:
  // startDate [Date Object], endDate [Date Object]
  // startMoment [Moment Object], endMoment [Moment Object]
  confirmDate({startDate, endDate, startMoment, endMoment}) {
    this.setState({
      startDate,
      endDate
    });
  }
  openCalendar() {
    this.calendar && this.calendar.open();

  }
 
  // in render function
  render(){
    // It's an optional property, I use this to show the structure of customI18n object.
  let customI18n = {
    'w': ['', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    'weekday': ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    'text': {
      'start': 'Check in',
      'end': 'Check out',
      'date': 'Date',
      'save': 'Confirm',
      'clear': 'Reset'
    },
    'date': 'DD / MM'  // date format
  };
  // optional property, too.
  let color = {
    subColor: '#f0f0f0'
  };
  return (
    <View style={styles.container}>     
      <Button 
        icon={
          <Icon
            name="calendar"
            size={14}
            color="gray"
            style={styles.icons}
          />
        }
        title="Mon 15 Apr" 
        onPress={this.openCalendar}
       
        raised={true}
        type="clear"
        titleStyle={{ color: 'black', fontSize: 14, letterSpacing: .5, paddingRight: 20, padding: 0, textAlign: 'center'}}
        />
  
   
     
      <Calendar
        i18n="en"
        ref={(calendar) => {this.calendar = calendar;}}
        customI18n={customI18n}
        color={color}
        format="YYYYMMDD"
        minDate="20170510"
        maxDate="20201231"
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onConfirm={this.confirmDate}
      />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  
  innerform: {
    flexDirection: 'row',
    flexWrap: 'wrap',
     padding: 15,
    
  },
  icons: {
    marginRight: 30,
    marginTop:5,
  },
  para: {
    display: 'flex',
    color: 'lightgray',
    letterSpacing: .5,  
    width: 150,
  },
 calBorder: {
   borderRightWidth: .5,
   borderBottomColor: 'lightgray',
   paddingRight: 0

 },
 button: {
   padding: 0,
   color: 'black',

 }



  
});
  