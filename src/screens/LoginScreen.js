import React from "react";
import { View, StyleSheet} from 'react-native'

import Login from "../components/Login";

const LoginScreen = () =>{
  return(
    <View style={{backgroundColor: '#FFF', height: '100%'}}>
      <Login />
    </View>
  )
}

const styles = StyleSheet.create({})
export default LoginScreen