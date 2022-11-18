import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../theme'

export default function Underline({children}) {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
      <View style={styles.underline}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.secundary,
    marginBottom: 4
  },
  underline: {
    borderBottomWidth: 3,
    borderBottomColor: '#edcd44',
    borderRadius:10,
    width: 26
  }
})