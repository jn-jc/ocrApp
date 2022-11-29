import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

//Local
import PassInput from './PassInput'
import Input from './Input'
import PrimaryButton from './PrimaryButton'

const singInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Ingrese un correo electronico valido')
    .required('El email es requerido'),
  password: yup
    .string()
    .required(),
})


const LoginForm = () => {

  const navigation = useNavigation()

  const [isVisible, setIsVisible] = useState(true)

  const login = async (data) => {
    try {
      const token = await fetch('http://192.166.1.1/prueba', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          //'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
          usuario: data.email,
          password: data.password
        })
          //'username=admin%40cruzverde.com.co&password=Octubre2022'
      })
      const json = token.json();
      console.log(json)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Formik
      validationSchema={singInValidationSchema}
      validateOnChange={false}
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={values => {
        if (values) {
          login(values)
          navigation.navigate('Home')
        } else {
          alert('El usuario o la contraseña son inconrrectos, por favor intente de nuevo')
        }
      }}
    >
      {({ handleSubmit, values, handleChange, errors }) => (
        <View style={{ marginHorizontal: 15 }}>
          <Text style={styles.label}>Email</Text>
          <Input
            onChangeText={handleChange('email')}
            value={values.email}
            autoCapitalize='none'
            autoComplete='off'
            autoCorrect={false}
            keyboardType={'email-address'}
          />
          <Text style={styles.error}>{errors.email}</Text>
          <Text style={styles.label}>Contraseña</Text>
          <View>
            <PassInput
              onChangeText={handleChange('password')}
              value={values.password}
              secureTextEntry={isVisible}
              autoCorrect={false}
              autoComplete='off'
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableWithoutFeedback
              onPress={handleSubmit}
            >
              <View>
                <PrimaryButton>Iniciar Sesión</PrimaryButton>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      )}
    </Formik>
  )
}

export default LoginForm

const styles = StyleSheet.create({
  error: {
    fontSize: 8,
    marginTop: -20,
    alignSelf: 'center',
    color: 'red'
  },
  label: {
    fontSize: 12,
    color: '#535456',
  },
})