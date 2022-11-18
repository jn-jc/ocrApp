import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import PrimaryButton from "./PrimaryButton";
import theme from "../theme";

const Login = () => {

  const [isFocus, setIsFocus] = useState(false)
  const [isFocusPass, setIsFocusPass] = useState(false)

  return (

    <View>
      <View style={{ alignItems: 'center', marginTop: 66 }}>
        <Image source={require('../../assets/Logocv.png')} fadeDuration={0} style={{ width: 150, height: 150, marginBottom: 15, marginLeft: 15 }} />
        <Text style={styles.title}>Ingresa</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          autoComplete="off"
          autoCapitalize="none"
          placeholder="Ingresa tu correo electronico"
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
          style={isFocus ? styles.inputTextFocus : styles.inputText}
        />
        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.inputIcon}>
          <TextInput
            secureTextEntry={true}
            placeholder="Ingresa tu contraseña"
            onBlur={() => setIsFocusPass(false)}
            onFocus={() => setIsFocusPass(true)}
            style={isFocusPass ? styles.inputTextFocus : styles.inputText}
          />
          <Icon style={styles.icon} name="eye-off" size={15} color='#5EB04E' />
        </View>

      </View>
      <View>
        <TouchableHighlight
          onPress={() => { alert('Presionaste el boton de iniciar sesion') }}
          style={{ alignItems: 'center' }}
        >
          <PrimaryButton>Iniciar Sesión</PrimaryButton>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputIcon:{
    flexDirection: 'row'
  },
  formContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 17,
  },
  title: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.main,
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 12
  },
  label: {
    fontSize: 12,
    color: '#535456',
  },
  inputText: {
    borderWidth: 1,
    marginTop: 4,
    paddingLeft: 16,
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
    borderWidth: 2,
    marginTop: 4,
    paddingLeft: 16,
    height: 50,
    width: '100%',
    borderRadius: 8,
    borderColor: '#5EB04E',
    marginBottom: 24,
    fontSize: 12,
    fontWeight: '600',
    color: '#404447'

  }

})

export default Login