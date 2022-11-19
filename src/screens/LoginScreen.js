import React from "react";
import { View} from 'react-native'

import Login from "../components/Login";

const LoginScreen = () =>{
  return(
    <View style={{backgroundColor: '#FFF', height: '100%'}}>
      <Login />
    </View>
  )
}

export default LoginScreen