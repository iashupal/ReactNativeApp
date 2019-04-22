import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class ExploreScreen extends React.Component{
    render() {
        const { toggleSearch, showCal } = this.props;
        
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
            <Text>Explore!</Text>
          </View>
        );
      }
}


