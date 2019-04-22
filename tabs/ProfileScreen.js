import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class ProfileScreen extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Profile</Text>
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