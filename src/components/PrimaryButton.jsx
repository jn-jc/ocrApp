import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import theme from "../theme";

const PrimaryButton = ({ children }) => {
  return (
    <View
      style={styles.button}>
      <Text
        style={styles.text}
      >
        {children}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    width: 360,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    marginVertical: 16
  }
})
export default PrimaryButton