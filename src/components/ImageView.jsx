import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Underline from './Underline'
import theme from '../theme'
export default function ImageView({ children }) {
  return (
    <View>
      <Underline>Imagen</Underline>
      <View style={styles.container}>
        <Text style={styles.fileNameText}>{children}</Text>
        <Icon name='trash-can-outline' size={20} color='#E25453' />
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