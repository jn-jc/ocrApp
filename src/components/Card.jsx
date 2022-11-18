import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import theme from "../theme";

const Card = ({ children, textMain, onGo }) => {
  const navigation = useNavigation()

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(onGo)}
    >
      <View style={styles.card}>
        <View style={styles.topText}>
          <Image source={require('../../assets/logo.png')} fadeDuration={0} style={{width:35, height:25, marginBottom: 5}}  />
          <Text style={styles.textMain}>{textMain}</Text>
          <Icon name="chevron-right" size={25} color='#868686'/>
        </View>
        <View>
          <Text style={styles.subText}>{children}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    width: 360,
    paddingLeft: 15,
    paddingTop: 6,
    borderWidth: 0,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    elevation: 6
  },
  topText: {
    flexDirection: 'row',
    borderBottomWidth: .3,
    width: 320,
    borderBottomColor: '#C8CACC'
  },
  textMain: {
    fontSize: 12,
    fontWeight: '700',
    color: theme.colors.secundary,
    marginVertical: 4,
    marginLeft: 7,
    marginRight: 10
  },
  subText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#C8CACC',
    marginTop: 10,
    marginBottom: 25
  }
})

export default Card