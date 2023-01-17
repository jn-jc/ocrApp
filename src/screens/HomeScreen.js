import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Home from '../components/Home'

const HomeScreen = () =>{
  return(
    <View>
      <Home/>
      <StatusBar style="dark" />
    </View>
  )
}

export default HomeScreen