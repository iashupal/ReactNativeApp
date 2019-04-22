import React from 'react';
import {Platform, StyleSheet,TouchableHighlight,Modal, TextInput, Text, View} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';



export class CustomCalendar extends React.Component{
    constructor(props){
        super(props);
        // this.openCalendar = this.openCalendar.bind(this);
    }
    state = {
        cal: false,
    }
    openCalendar(visible){
        this.setState({ cal: visible });
    }
//   openCalendar(){
//       <CalendarList/>
//   }
    render(){
        return(
            <View>
                
                <Modal style={styles.calendarModalHeight}
                    animationType = {"slide"} 
                    visible = {this.state.cal} 
                    onBackdropPress={() => this.setState({ cal: false })}
                >
                <View style={styles.modalInner}>
                    <TouchableHighlight 
                        onPress = {() => {this.openCalendar(!this.state.cal)}}>
                            
                        <Text style = {styles.text}>X</Text>
                    </TouchableHighlight>
                    <Text style={styles.dateText}>Select Dates</Text>
                    <Icon
                        name="calendar"
                        size={14}
                        color="white"
                        style={[styles.icons,styles.calIcon]}
                    />
                </View>    
                    <CalendarList
                        // ref="calendarList"
                        visible = {this.state.cal}
                    
                        style={{
                            borderWidth: 1,
                            borderColor: 'gray',
                            height: 350
                        }}
                        onDayPress={(day) => {console.log('selected day', day)}}
                        markedDates={
                            {'2019-05-20': {textColor: 'green'},
                             '2019-05-22': {startingDay: true, color: 'green'},
                             '2019-05-23': {selected: true, endingDay: true, color: 'skyblue', textColor: 'gray'},
                             '2019-05-04': {disabled: true, startingDay: true, color: 'skyblue', endingDay: true}
                            }}
                          // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
                          markingType={'period'}
                        // Specify theme properties to override specific styles for calendar parts. Default = {}
                        theme={{
                            backgroundColor: '#ffffff',
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#b6c1cd',
                            selectedDayBackgroundColor: 'skyblue',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#00adf5',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                            arrowColor: 'orange',
                            monthTextColor: 'black',
                            textDayFontFamily: 'monospace',
                            textMonthFontFamily: 'monospace',
                            textDayHeaderFontFamily: 'monospace',
                            textMonthFontWeight: 'bold',
                            textDayFontSize: 16,
                            textMonthFontSize: 16,
                            textDayHeaderFontSize: 16
                        }}
                    >
                    </CalendarList>
                
                </Modal>
                <View style={styles.calendarUpper}>
                    <View style={[styles.innerform,styles.calBorder]}>
                        <Button 
                            icon= {
                                <Icon
                                    name="calendar"
                                    size={14}
                                    color="gray"
                                    style={styles.icons}
                                />
                                }
                                title="Mon 15 Apr" 
                            
                                 onPress={() => {this.openCalendar(true)}}
                                // onPress={() => {this.showCalendar()}}
                                raised={true}
                                type="clear"
                                titleStyle={{ color: 'black', fontSize: 14, letterSpacing: .5, paddingRight: 20, padding: 0, textAlign: 'center'}}
                        />
                            
                            {/* <DateRangePicker/> */}
                    </View>
                    <View style={styles.innerform}>
                        <Button 
                            icon={
                                <Icon
                                    name="calendar"
                                    size={14}
                                    color="gray"
                                    style={styles.icons}
                                />
                            }
                            title="Mon 29 Apr" 
                            // onPress={() => {this.showCal(true)}}
                            onPress={() => {this.openCalendar(true)}}
                            
                            raised={true}
                            type="clear"
                            titleStyle={{ color: 'black', fontSize: 14, letterSpacing: .5, paddingRight: 20, padding: 0, textAlign: 'center'}}
                        />
                        {/* <CustomCalendar/>  */}
                        {/* <DateRangePicker/> */}
                    </View>
                </View>
                    {/* calendar finish */}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
  calendarUpper: {
    flexDirection: 'row',
  },
    innerform: {
      flexDirection: 'row',
      flexWrap: 'wrap',
       paddingLeft: 20,
       paddingBottom: 3
      
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
     paddingRight: 10
  
   },
   button: {
     padding: 0,
     color: 'black',
  
   },
   text: {
    color: 'white',
    // marginTop: 5,
    textAlign: 'left',
    backgroundColor: 'transparent',
  // alignSelf: 'flex-end',
  // position: 'absolute',
  // right: 0

 },
 modalInner: {
     flexDirection: 'row',
     flexWrap: 'wrap',
     padding: 15,
     backgroundColor: 'skyblue',
    textAlign: 'center'
 },
 dateText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    letterSpacing: .5,
    fontWeight: 'bold',
    paddingLeft: 20,
 },
 calIcon: {
     textAlign: 'right',
      alignSelf: 'flex-end',
      right: 0,
      position: 'absolute',
      top: 15
 },
 calendarModalHeight: {
     height: 100
 }

  });
    