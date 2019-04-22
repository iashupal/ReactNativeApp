import React from 'react';
import {Platform, StyleSheet,TouchableHighlight,Modal, TextInput, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {CustomCalendar} from '../../tabs/CustomCalendar';
import {DateRangePicker} from '../../tabs/DateRangePicker';
import {Information} from '../../tabs/Information';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';


export default class ReturnScreen extends React.Component{
    state = {
        modalVisible: false,
     }
     toggleModal(visible) {
        this.setState({ modalVisible: visible });
     }
    render(){
        return(
            <View style={styles.container}>
              <Text style={[styles.tabtext, styles.active]}>RETURN</Text>
              <View style={styles.innerContainer}>
                 {/* Modal */}

                 <Modal animationType = {"slide"}   
                    visible = {this.state.modalVisible}
                        onBackdropPress={() => this.setState({ modalVisible: false })}
                        
                    animationIn={"slideInUp"}
                    animationOut={"slideOutDown"}>
                    <View style={[styles.form, styles.modalUpr]}>
                        <View style={[styles.innerform, styles.modalDiv]} animationType={"slide"} transparent={false}>
                        <Icon
                            name="plane-departure" size={14} color="gray"
                            style={styles.icons}
                        />
                
                        <TextInput style={[styles.para, styles.input]}
                            ref={(input) => { this.textInput = input; }}
                            placeholder="Departing From"
                        />
                        <TouchableHighlight onPress = {() => {
                            this.toggleModal(!this.state.modalVisible)}}>
                            
                            <Text style = {styles.text}>X</Text>
                        </TouchableHighlight>
                        </View>
                        </View>
                    </Modal>
                    {/* close modal */}

                    {/* form */}
                    <View style={styles.form}>
                        <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
                        <View style={[styles.innerform, styles.border]} animationType={"slide"}
                        transparent={false}>
                        {/* <View style={styles.flightform}> */}
                        <Icon
                            name="plane-departure" size={14} color="gray"
                            style={styles.icons}
                            />
                        <Text style={styles.para}>Departing From</Text>
                        {/* </View> */}
                        </View>
                        
                        </TouchableHighlight>
                        <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
                        <View style={styles.innerform}>
                        {/* <View style={styles.flightform}> */}
                            <Icon
                                name="plane-arrival" size={14} color="gray"
                                style={styles.icons}
                                />
                            <Text style={styles.para}>Flying To</Text>
                            {/* </View>    */}
                        </View>
                        </TouchableHighlight>
                    </View>
                    {/* finish */}
                    {/* calendar start */}
                
                    <View style={styles.calendar}>
                        <View style={[styles.innerform,styles.calBorder]}>
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
                        
                          //  onPress={() => {this.openCalendar(true)}}
                          onPress={() => {this.showCalendar()}}
                          raised={true}
                          type="clear"
                          titleStyle={{ color: 'black', fontSize: 14, letterSpacing: .5, paddingRight: 20, padding: 0, textAlign: 'center'}}
                      />
                        {/* <CustomCalendar/>  */}
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
                          onPress={() => {this.showCal(true)}}
                          // onPress={() => {this.openCalendar(true)}}
                          
                          raised={true}
                          type="clear"
                          titleStyle={{ color: 'black', fontSize: 14, letterSpacing: .5, paddingRight: 20, padding: 0, textAlign: 'center'}}
                      />
                        {/* <CustomCalendar/>  */}
                        {/* <DateRangePicker/> */}
                        </View>
                    </View>
                    {/* calendar finish */}
                     {/* selection */}
                     <View style={styles.selectn}>
                        <View style={styles.selectnInner}>
                        <Text style={styles.number}>1</Text>
                        <Icon
                            name="male" size={18} color="white"
                            style={styles.icons}
                        />
                        </View>
                        <View style={styles.selectnInner}>
                        <Text style={styles.number}>0</Text>
                        <Icon
                            name="child" size={18} color="white"
                            style={styles.icons}
                        />
                        </View>
                        <View style={styles.selectnInner}>
                        <Text style={styles.number}>0</Text>
                        <Icon
                            name="baby" size={18} color="white"
                            style={styles.icons}
                        />
                        </View>
                        <View style={styles.selectnInner}>
                            <Information/>
                            
                        </View>
                        
                    </View>
                    
                    {/* finish selection */}
              </View>
              {/* search icon */}
              <View style={styles.search}>
                <Icon
                name="search" size={16} color="white"
                style={[styles.icons,styles.searchIcon]}
                />
                </View>
                {/* finish search icon */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      backgroundColor: 'darkgray',
    },
    innerContainer: {
      backgroundColor : 'skyblue',
      paddingBottom: 10
    },
    welcome: {
      color : 'white',
      padding: 10,
      paddingLeft: 20,
      backgroundColor: 'skyblue',
      fontSize: 18,
      fontWeight: 'bold',
      letterSpacing: .5,
  
    },
    tab: {
      // flex: 1, 
      flexDirection: 'row',
      padding: 10,
      // paddingBottom: 0,
      backgroundColor: 'skyblue',
      
    },
    tabtext: {
      width: 70,
      letterSpacing: .5,
      textAlign : 'center',
      color: 'lightgray',
      fontWeight: 'bold',
      // paddingBottom : 0,
      fontSize: 12
    
    },
    active:{
      fontWeight:'bold',
      color: 'white',
   borderBottomWidth: 1,
   borderBottomColor: 'green',
    },
    form: {
      backgroundColor: 'white',
      textAlign: 'center',
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 10,
      //  padding: 15,
      
    },
    innerform: {
      flexDirection: 'row',
      flexWrap: 'wrap',
       padding: 15,
      
    },
    border: {
      borderBottomWidth: .5,
      // paddingBottom: 15,
     
      // paddingLeft: 5,
      // paddingRight: 5,
    
      borderBottomColor: 'lightgray',
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
    calendar:{
      marginTop: 10,
      backgroundColor: 'white',
      textAlign: 'center',
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 10,
      flexDirection: 'row',
      //  padding: 15,
    },
    innercalendar: {
            
    },
    input: {
      padding: 0,
      width: 300,
      color: 'black'
    },
    modalUpr: {
      marginTop: 20,
      borderRadius: 10,
      backgroundColor: 'lightgrey',
      
    },
    modalDiv: {
     height: 50,
     color: 'white',
     padding: 10,
     
   },
   text: {
      color: '#3f2949',
      marginTop: 5,
      textAlign: 'right',
      backgroundColor: 'transparent',
    // alignSelf: 'flex-end',
    // position: 'absolute',
    // right: 0
  
   },
   calBorder: {
     borderRightWidth: .5,
     borderBottomColor: 'lightgray',
     paddingRight: 0
  
   },
   number: {
    color: 'white',
    paddingRight: 15,
    paddingTop: 5
  },
  selectn: {
    flexDirection: 'row',
    margin: 20,
  },
  
  selectnInner: {
  flexDirection: 'row',
  // paddingRight: 10
  },
  
  searchIcon: {
    textAlign: 'center',
    paddingTop: 18,
    
    position: 'absolute',
    right: -10,
    top: -30,
    height: 50,
    width: 50,
    
    borderRadius: 50,
    backgroundColor: 'lightgray',
   
  }
    
  });
