import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function PassInput() {

  const [isFocusPass, setIsFocusPass] = useState(false)
  return (
    <View>
      <View style={isFocusPass ? styles.inputTextFocus : styles.inputIcon}>
        <TextInput
          secureTextEntry={true}
          placeholder="Ingresa tu contraseña"
          onBlur={() => setIsFocusPass(false)}
          onFocus={() => setIsFocusPass(true)}
          style={{ borderWidth: 1, width: '92%' }}
        />
        <Icon name='eye-off' size={18} color='#009530' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    marginTop: 44,
    height: 50,
    width: '100%',
    borderRadius: 8,
    borderColor: '#C9C9C9',
    marginBottom: 24,
    fontSize: 12,
    fontWeight: '600',
    color: '#404447'
  },
  inputTextFocus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    marginTop: 44,
    height: 50,
    width: '100%',
    borderRadius: 8,
    borderColor: '#009530',
    marginBottom: 24,
    fontSize: 12,
    fontWeight: '600',
    color: '#404447'
  }
})