import React from 'react';
import {Platform, StyleSheet,TouchableHighlight,Modal, TextInput, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class MulticityScreen extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <Text style={styles.tabtext}>MULTI-CITY</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
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
})
