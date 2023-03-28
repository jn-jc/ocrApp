import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from "expo-image-picker"

import theme from "../theme";
import PrimaryButton from "../components/PrimaryButton";
import ImageView from "../components/ImageView";
import MessageImage from "../components/MessageImage";
import { TokenContext } from "../context/TokenContext";
import { Loading } from "../components/Loading";
import { StatusBar } from "expo-status-bar";
import { sendImageB64 } from "../api/sendImage";

const NewCustomerScreen = () => {

  const { userToken, isLoading, setIsLoading } = useContext(TokenContext)
  const [modalVisible, setModalVisible] = useState(false)
  const [image, setImage] = useState(null)
  const [imageBase64, setImageBase64] = useState('')

  const navigation = useNavigation()

  const sendImage = async () => {

    try {
      setIsLoading(true)
      let response = await sendImageB64(imageBase64, userToken)
      console.log(response)
      if (response.status_code == 200) {
        navigation.navigate('Succes')
        setIsLoading(false)
      }
      else if (response.status_code == 500) {
        setIsLoading(false)
      }
      else if (response.status_code == 400) {
        setIsLoading(false)
      }
      else if (response.detail == 'Not authenticated' || 'Validación de credenciales sin exito') {
        alert('Sesión expirada, vuelva a iniciar sesión')
        navigation.navigate('Login')
        setIsLoading(false)
      }
      setImage(null)
      setImageBase64('')
    } catch (error) {
      alert(error)
      setIsLoading(false)
      setImage(null)
      setImageBase64('')
    }

  }
  const takePicture = async () => {

    const options = {
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.6,
    }

    let result = await ImagePicker.launchCameraAsync(options)

    if (result.assets != null) {
      let fileName = 'image-1'
      setImage(fileName)
      setImageBase64(result.assets[0].base64)

    } else {
      console.log(result)
    }

  }

  return (

    <View style={isLoading ? { backgroundColor: '#FFF', height: '100%', justifyContent: 'center', alignItems: 'center' } : styles.container}>
      {isLoading ?
        <View>
          <Loading />
          <Text>Cargando imagen...</Text>
        </View> :
        <View>
          <Text style={styles.paragraph}>
            Toma la imagen completa del voucher, donde se visualicen los datos y la firma del cliente que desea ingresar a alguno de los programas de Cruz Verde
          </Text>
          <View style={styles.centerItems}>
            <TouchableWithoutFeedback
              onPress={takePicture}
            >
              <View style={styles.card}>
                <Icon style={styles.cameraIcon} name="camera" size={30} color='#009738' />
                <View style={styles.topText}>
                  <Text style={styles.textMain}>Abrir la cámara</Text>
                </View>
                <Icon style={styles.arrowIcon} name="chevron-right" size={25} color='#868686' />
              </View>
            </TouchableWithoutFeedback>
          </View>
          {image &&
            <View style={styles.fileContainer}>
              <ImageView
                image={image}
                setImage={setImage}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible} />
            </View>
          }
          <View style={styles.centerItems}>
            {isLoading ?
              <View style={{ marginTop: 20 }} >
                <Loading />
              </View>
              : <TouchableOpacity
                style={styles.sendButton}
                disabled={image != null ? false : true}
                onPress={sendImage}>
                <PrimaryButton styles={styles.sendButton} children={'Enviar'} />
              </TouchableOpacity>}
          </View>
          <MessageImage
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </View>}
      <StatusBar style="dark" />
    </View>
  )
}


const styles = StyleSheet.create({
  arrowIcon: {
    marginRight: -50
  },
  cameraIcon: {
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
  fileContainer: {
    marginTop: 25,
    marginLeft: 15,
  }
})

export default NewCustomerScreen