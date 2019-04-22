import React from 'react';
import {Platform, StyleSheet,TouchableHighlight, TextInput, Text, View} from 'react-native';
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class Information extends React.Component{
    // state = {
    //   modalVisible: false,
    // }
    // toggleModal(visible) {
    //     this.setState({ modalVisible: visible });
    // }
    state = {
        isModalVisible: false,
      };
    
      _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });
    render(){
        return(
      
            <View>
                {/* Modal */}

                    <Modal 
                        animationType = {"slide"}   
                        visible = {this.state.modalVisible}
                        onBackdropPress={() => this.setState({ modalVisible: false })}    
                        animationIn={"slideInUp"}
                        animationOut={"slideOutDown"}>
                        <View style={styles.inrModal}>
                            <View>
                                <Text style={styles.modalHeading}>Passenger Information</Text>
                            </View>
                            <View>
                            <Text>Cabin</Text>
                            </View>
                        </View>
                        <TouchableHighlight onPress = {() => {
                            this.toggleModal(!this.state.modalVisible)}}>
                            
                            <Text style = {styles.text}>X</Text>
                        </TouchableHighlight>
                    </Modal>
            {   /* close modal */}
                <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
                    <View style={styles.drpdwnContaion}>
                        <Text style={styles.number}>Economy</Text>
                        <Icon 
                            name="caret-down" 
                            size={18} color="white"
                            style={styles.icons}>
                        </Icon>
                    </View>
                </TouchableHighlight>
                
            </View>



            

        )
    }
}

const styles = StyleSheet.create({
    number: {
        color: 'white',
        paddingRight: 15,
        paddingTop: 5
      },
      icons: {
        marginRight: 30,
        marginTop:5,
      },
      drpdwnContaion: {
          flexDirection: 'row',
      },
      inrModal: {
          margin: 20
      },
      modalHeading: {
          color: 'blue',
          fontSize: 14,
          fontWeight: 'bold'
      }
})