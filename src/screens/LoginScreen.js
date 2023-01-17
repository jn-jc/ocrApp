import React, { useContext } from "react";
import { View, StyleSheet } from 'react-native'
import { TokenContext } from "../context/TokenContext";
import { Loading } from "../components/Loading";
import { StatusBar } from "expo-status-bar";

import Login from "../components/Login";

const LoginScreen = () => {

  const { isLoading } = useContext(TokenContext)

  return (
    <View style={ !isLoading ? { backgroundColor: '#FFF', height: '100%'} : styles.container}>
      {isLoading ? <Loading /> :
        <Login />}
      <StatusBar style="dark"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen