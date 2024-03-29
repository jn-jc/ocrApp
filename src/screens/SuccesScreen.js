import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import PrimaryButton from '../components/PrimaryButton'
import { NuevaFotoButton } from "../components/NuevaFotoButton";
import theme from "../theme";
import { StatusBar } from "expo-status-bar";

const SuccesScreen = () => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => {
      BackHandler.addEventListener('hardwareBackPress', () => true)
    }
  })
  const navigation = useNavigation()
  return (
    <View
      style={styles.container}
    >
      <View style={styles.topContainer}>
        <Icon name="check-circle" size={100} color='#009736' />
        <Text style={styles.textTitle}>Envío Exitoso</Text>
      </View>
      <Text style={styles.textMessage}>La imagen fue enviada exitosamente</Text>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('NewCustomer')}>
          <PrimaryButton>Nuevo envío</PrimaryButton>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
        >
          <NuevaFotoButton>Volver a inicio</NuevaFotoButton>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  topContainer: {
    marginTop: 50
  },
  textTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.secundary,
    marginTop: 20
  },
  textMessage: {
    fontSize: 12,
    color: theme.colors.textPrimary,
    marginVertical: 30

  }
})

export default SuccesScreen