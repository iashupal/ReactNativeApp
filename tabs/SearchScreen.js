import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SearchFlight from '../Navigation/SearchFlight';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class SearchScreen extends React.Component{
  constructor(){
      super();
      this.state
  }
    render(){
        const {showCalendar} = this.props;
        return(
            <View style={styles.container}>
                <SearchFlight/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    
    backgroundColor: 'darkgray',
    }
})