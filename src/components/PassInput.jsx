import React, { useState } from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function PassInput() {

  const [isFocusPass, setIsFocusPass] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  return (
    <View style={isFocusPass ? styles.inputIconContainerFocus : styles.inputIconContainer}>
      <TextInput
        autoCorrect={false}
        keyboardType={isVisible ? 'default' : 'visible-password'}
        autoComplete='password'
        secureTextEntry={isVisible}
        onBlur={() => setIsFocusPass(false)}
        onFocus={() => setIsFocusPass(true)}
        style={styles.input}
      />
      <Pressable
        onPress={() => { setIsVisible(!isVisible) }}
      >
        <Icon style={styles.icon} name='eye-off' size={22} color='#009530' />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 12,
    fontWeight: '600',
    color: '#404447',
    width: '80%',
    paddingLeft: 16
  },
  icon: {
    paddingRight: 15,
    paddingVertical: 12

  },
  inputIconContainer: {
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
  inputIconContainerFocus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    marginTop: 44,
    height: 50,
    width: '100%',
    borderRadius: 8,
    borderColor: '#009530',
    marginBottom: 24,
  }
})