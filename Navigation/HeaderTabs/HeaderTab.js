import React from 'react';
import {Platform, StyleSheet,TouchableHighlight,Modal, TextInput, Text, View} from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import ReturnScreen from './ReturnScreen';
import OnewayScreen from './OnewayScreen';
import MulticityScreen from './MulticityScreen';

const TabNavigator = createMaterialTopTabNavigator({

    RETURN: {
      screen :ReturnScreen,
      navigationOptions: {
        tabBarLabel: "RETURN",
       
      }
    },
    ONEWAY: {
      screen: OnewayScreen,
      navigationOptions: {
        tabBarLabel: "ONE WAY",
        
      }
    },
    MULTICITY: {
      screen: MulticityScreen,
      navigationOptions: {
        tabBarLabel: "MULTI-CITY",
        
      }
    },
   
    
  },
  {
    order: ['RETURN', 'ONEWAY', 'MULTICITY'],
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'lightgray',
      style: {
        backgroundColor: 'skyblue',
      }
    },
  },);
  export default createAppContainer(TabNavigator);


// export default createAppContainer(
//     createMaterialTopTabNavigator(
//       {
//         RETURN: {
//                   screen :ReturnScreen,
               
//                 },
//                 ONEWAY: {
//                   screen: OnewayScreen,
                
//                 },
//                 MULTICITY: {
//                   screen: MulticityScreen,
                
//                 },
               
                
                
//       },
//       {
//             order: ['RETURN', 'ONEWAY', 'MULTICITY'],
//             tabBarOptions: {
//               activeTintColor: 'white',
//               inactiveTintColor: 'lightgray',
//               style: {
//                 backgroundColor: 'skyblue',
//               }
//             },
//           },
//     )
//   );
  
const styles = StyleSheet.create({
    container: {
        
    }
})
