import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import theme from "../theme";
import PrimaryButton from "../components/PrimaryButton";
import ImageView from "../components/ImageView";

const NewCustomerScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Toma la imagen completa del voucher, donde se visualicen los datos y la firma del cliente que desea igresar a alguno de los programas de Cruz Verde
      </Text>
      <View style={styles.centerItems}>
        <TouchableWithoutFeedback
          onPress={() => alert('Has abierto la camara')}
        >
          <View style={styles.card}>
            <Icon style={styles.cameraIcon} name="camera" size={30} color='#009738'/>
            <View style={styles.topText}>
              <Text style={styles.textMain}>Abrir la camara</Text>
            </View>
            <Icon style={styles.arrowIcon} name="chevron-right" size={25} color='#868686'/>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.fileContainer}>
        <ImageView>nombre_archivo.jgp</ImageView>
      </View>
      <View style={styles.centerItems}>
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => navigation.navigate('Succes')}>
          <PrimaryButton styles={styles.sendButton} children={'Enviar'} />
        </TouchableOpacity>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  arrowIcon:{
    marginRight: -50
  },
  cameraIcon:{
    backgroundColor: '#EBFAE5',
    marginVertical: 20,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 7,
    marginLeft: -40
  },
  paragraph: {
    paddingHorizontal: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    textAlign: "center",
    color: theme.colors.textPrimary,
    fontSize: 14
  },
  container: {
    marginVertical: 30
  },
  centerItems: {
    alignItems: 'center'
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    width: 360,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    elevation: 6
  },
  textMain: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.secundary,
    marginVertical: 34,
    marginLeft: -110
  },
  sendButton: {
    marginTop: 31
  },
  fileContainer:{
    marginTop: 25,
    marginLeft: 15,
  }
})

export default NewCustomerScreen