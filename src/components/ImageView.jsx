import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Underline from './Underline'
import theme from '../theme'
export default function ImageView({ image, setImage, setModalVisible }) {

  function removeImage () {
    setImage(null)
    setModalVisible(true)
  }
  return (
    <View>
      <Underline>Imagen</Underline>
      <View style={styles.container}>
        <Text style={styles.fileNameText}>{image}</Text>
        <TouchableWithoutFeedback
          onPress={removeImage}
        >
          <Icon name='trash-can-outline' size={20} color='#E25453' />
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginHorizontal: 30,
  },
  fileNameText: {
    color: theme.colors.secundary,
    fontSize: 12,
    fontWeight: '600',
    borderBottomColor: '#C9C9C9',
    borderBottomWidth: 1,
    paddingBottom: 3
  }
})