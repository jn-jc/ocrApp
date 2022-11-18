import React from "react";
import { View, StyleSheet} from 'react-native'

import Login from "../components/Login";
import PassInput from "../components/PassInput";

const LoginScreen = () =>{
  return(
    <View style={{backgroundColor: '#FFF', height: '100%'}}>
      <PassInput/>
    </View>
  )
}

const styles = StyleSheet.create({})
export default LoginScreen