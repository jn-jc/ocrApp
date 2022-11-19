import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

//Local

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

  return (
    <Formik
      validationSchema={singInValidationSchema}
      validateOnChange={false}
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={values => { alert(`email: ${values.email} pass: ${values.password}`) }}
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
          <Input
            onChangeText={handleChange('password')}
            value={values.password}
            secureTextEntry={true}
          />
          <View style={{ alignItems: 'center' }}>
            <TouchableWithoutFeedback
              onPress={handleSubmit}
            >
              <View>
                <PrimaryButton>Iniciar Sesion</PrimaryButton>
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
  error:{
    fontSize: 8,
    marginTop: -20,
    alignSelf:'center',
    color: 'red'
  },
  label: {
    fontSize: 12,
    color: '#535456',
  },
})