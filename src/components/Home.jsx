import React from "react";
import { View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import theme from "../theme";

import Card from "./Card";
import Underline from "./Underline";

const Home = () => {
  return(
    <View>
      <View style={styles.indexContainer}>
        <Underline>Inicio</Underline>
      </View>
      <View style={styles.containerCard}>
        <Card 
          textMain={'Nuevo Cliente Programa Club Cruz Verde'}
          onGo={'NewCustomer'}
        >Envía la imagen del voucher que firma el cliente</Card>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  containerCard:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  indexContainer:{
    marginLeft: 16,
    marginVertical: 17
  }
})

export default Home