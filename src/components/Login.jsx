import React, {useContext} from "react";
import { View, Text, StyleSheet, Image } from "react-native";


import theme from "../theme";
import LoginForm from "./LoginForm";


const Login = () => {

  return (

    <View>
      <View style={{ alignItems: 'center', marginTop: 70 }}>
        <Image source={require('../../assets/Logocv.png')} fadeDuration={0} style={{ width: 150, height: 150, marginBottom: 15, marginLeft: 15 }} />
        <Text style={styles.title}>Ingresa</Text>
      </View>
      <View >
        <LoginForm/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
  title: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.main,
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 12
  },


})

export default Login