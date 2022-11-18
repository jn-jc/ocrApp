import React, { useState } from "react";
import { View, Text, TextInput, TouchableWithoutFeedback, StyleSheet, Image } from "react-native";

import PrimaryButton from "./PrimaryButton";
import theme from "../theme";
import PassInput from "./PassInput";

const Login = () => {

  function inputEmpty(password, email) {
    if (password && email !== ' ') {
      return true
    }
    else {
      return false
    }
  }

  const [pass, onChagePass] = useState('')

  const [email, onChangeEmail] = useState('')
  const [isFocus, setIsFocus] = useState(false)

  return (

    <View>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Image source={require('../../assets/Logocv.png')} fadeDuration={0} style={{ width: 150, height: 150, marginBottom: 15, marginLeft: 15 }} />
        <Text style={styles.title}>Ingresa</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={isFocus ? styles.inputTextFocus : styles.inputText}
          onChangeText={onChangeEmail}
          keyboardType={'email-address'}
          autoComplete="off"
          autoCapitalize="none"
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
          value={email}
        />
        <Text style={styles.label}>Contraseña</Text>
        <View>
          <PassInput
            pass={pass}
            onChagePass={onChagePass}
          />
        </View>
      </View>
      <View
        style={{ alignItems: 'center' }}>
        <TouchableWithoutFeedback
          onPress={() => { alert(`email: ${email} password: ${pass} `) }}
          disabled={inputEmpty(pass, email) ? false : true}
        >
          <View>
            <PrimaryButton >Iniciar Sesión</PrimaryButton>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 20,
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