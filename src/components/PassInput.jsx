import React, { useState } from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function PassInput({ value, onChangeText, secureTextEntry, autoCapitalize, autoComplete, autoCorrect, keyboardType, ...props }) {

  const [isFocusPass, setIsFocusPass] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  return (
    <View style={isFocusPass ? { ...styles.inputIconContainer, borderColor: '#5EB04E', borderWidth: 2 } : { ...styles.inputIconContainer }}>
      <TextInput
        style={styles.input}
        autoCorrect={autoCorrect}
        keyboardType={isVisible ? 'default' : 'visible-password'}
        autoComplete={autoComplete}
        secureTextEntry={isVisible}
        onBlur={() => setIsFocusPass(false)}
        onFocus={() => setIsFocusPass(true)}
        onChangeText={onChangeText}
        value={value}
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
    width: '90%',
    paddingLeft: 16
  },
  icon: {
    paddingRight: 15,
    paddingVertical: 12

  },
  inputIconContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#C9C9C9',
    marginTop: 4,
    height: 50,
    width: '100%',
    marginBottom: 24,
  },
})