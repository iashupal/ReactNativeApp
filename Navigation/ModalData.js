import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Dropdown } from 'react-native-material-dropdown';

export default class ModalData extends Component {
  state = {
    visibleModal: null,
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.drpdwnContaion}>
            <View style={styles.number}>
                <Text style={styles.number}>{text}</Text>
            </View>
            <Icon 
                name="caret-down" 
                size={18} color="white"
                style={styles.icons}>
            </Icon>
        </View>    
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
        <View style={styles.inrModal}>
            <View>
                <Text style={styles.modalHeading}>Passenger Information</Text>
                <View style={styles.passengerInfo}>
                   <View style={styles.passengerInrInfo}>
                        <Text style={styles.drpHeading}>Adults</Text>
                        <Text style={[styles.drpHeading, styles.yearHeading]}>12+ years</Text>
                   </View>
                   <View>
                   
                    {/* <Dropdown
                        label='Favorite Fruit'
                        data={data}
                    /> */}
                   </View>
                </View>
            </View>
            <View>
                <Text style={styles.modalHeading}>Cabin</Text>
            </View>
        </View>
     
      {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );

  render() {
    // let data = [{
    //     value: 'Banana',
    //   }, {
    //     value: 'Mango',
    //   }, {
    //     value: 'Pear',
    //   }];
    return (
      <View style={styles.container}>
        {this._renderButton('Economy', () => this.setState({ visibleModal: 1 }))}
       
        
        <Modal isVisible={this.state.visibleModal === 1}  onBackdropPress={() => this.setState({ visibleModal: false })}>
          {this._renderModalContent()}
        </Modal>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  
  modalContent: {
    backgroundColor: 'white',
    padding: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  number: {
    color: 'white',
    paddingRight: 5,
    paddingTop: 3,
    // fontWeight: 'bold',
    letterSpacing: .5,
  },
  icons: {
    marginRight: 0,
    marginTop:5,
  },
  drpdwnContaion: {
      flexDirection: 'row',
  },
  inrModal: {
      margin: 20
  },
  modalHeading: {
      color: 'skyblue',
      fontSize: 14,
      fontWeight: 'bold'
  },
  passengerInfo: {
      marginTop: 15,
      marginBottom: 15,
  },
  drpHeading: {
      fontSize: 12,
      letterSpacing: .5,
      color: 'black'
  },
  yearHeading: {
    color: 'gray',
  },
  passengerInfo: {
      flexDirection: 'row',
  }

});