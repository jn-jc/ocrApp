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

const NewCustomerScreen = () => {

  const { userToken } = useContext(TokenContext)
  const [modalVisible, setModalVisible] = useState(false)
  const [image, setImage] = useState(null)
  const [imageBase64, setImageBase64] = useState('')

  const navigation = useNavigation()

  const sendImage = () => {
    const url = 'http://127.0.0.1:8000/image/send'

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${userToken}`,
      },
      body: imageBase64
    }
    console.log(imageBase64)
    fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${userToken}`,
        Accept: 'application/json'
      },
      body: imageBase64 
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        navigation.navigate('Succes')
      })
      .catch(error => console.log(error))

  }


  const takePicture = async () => {

    const options = {
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.6,
    }

    let result = await ImagePicker.launchCameraAsync(options)

    if (result.assets != null) {
      console.log(result)
      let fileName = 'image-1'
      setImage(fileName)
      setImageBase64(result.assets[0].base64)

    } else {
      console.log(result)
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Toma la imagen completa del voucher, donde se visualicen los datos y la firma del cliente que desea igresar a alguno de los programas de Cruz Verde
      </Text>
      <View style={styles.centerItems}>
        <TouchableWithoutFeedback
          onPress={takePicture}
        >
          <View style={styles.card}>
            <Icon style={styles.cameraIcon} name="camera" size={30} color='#009738' />
            <View style={styles.topText}>
              <Text style={styles.textMain}>Abrir la camara</Text>
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
        <TouchableOpacity
          style={styles.sendButton}
          disabled={image != null ? false : true}
          onPress={sendImage}>
          <PrimaryButton styles={styles.sendButton} children={'Enviar'} />
        </TouchableOpacity>
      </View>
      <MessageImage
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
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