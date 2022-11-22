import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MessageImage = ({ modalVisible, setModalVisible }) => {
  return (
    <View>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.message} >
            <Icon name="check-circle" size={20} color='#009736' />
            <Text style={styles.text} >Se ha eliminado la imagen capturada</Text>
            <TouchableWithoutFeedback
              onPress={() => { setModalVisible(!modalVisible) }}
            >
              <Icon style={{marginLeft: 65}} name='close' size={18} color='#000000' />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer:{
    flex: 1,
    justifyContent:'flex-end'
  },
  message: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBFAE7',
    margin: 15,
    paddingVertical: 15,
    paddingLeft: 17,
    paddingRight: 23

  },
  text: {
    color: '#535A73',
    fontSize: 12,
    paddingLeft: 7,
  }
})

export default MessageImage;
