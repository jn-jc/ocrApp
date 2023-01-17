import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

//Local
import PassInput from './PassInput'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import { getToken } from '../api/auth'
import { TokenContext } from '../context/TokenContext'


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

  const { setUserToken, setIsLoading } = useContext(TokenContext)

  const navigation = useNavigation()

  const [isVisible, setIsVisible] = useState(true)

  return (

    <Formik
      validationSchema={singInValidationSchema}
      validateOnChange={false}
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={async values => {
        if (values) {
          try {
            setIsLoading(true)
            const token = await getToken(values.email, values.password);
            if ('access_token' in token) {
              setUserToken(token.access_token)
              setIsLoading(false)
              navigation.navigate('Home')
            } else {
              setIsLoading(false)
              alert('Acceso incorrecto')
            }
          } catch (error) {
            setIsLoading(false)
            alert('Se presento un error al conectarse a la base de datos, por favor comunicarse con el area tecnica')
          }
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