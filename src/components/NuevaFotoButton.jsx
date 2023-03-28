import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import theme from "../theme";

export const NuevaFotoButton = ({ children }) => {
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
    marginTop: 20,
    width: 360,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    border: `2px solid ${theme.colors.primary}`,
  },
  text: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: '600',
    marginVertical: 16
  }
})