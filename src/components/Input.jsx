import React, {useState} from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ value, onChangeText, secureTextEntry, autoCapitalize, autoComplete, autoCorrect,keyboardType, ...props }) => {

  const [onFocus, setOnFocus] = useState(false)

  return (

      <TextInput
        onChangeText={onChangeText}
        onBlur={() => setOnFocus(false)}
        onFocus={() => setOnFocus(true)}
        value={value}
        style={onFocus ? {...styles.input, borderColor: '#5EB04E', borderWidth: 2} : {...styles.input}}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        keyboardType={keyboardType}
      />

  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#C9C9C9',
    marginTop: 4,
    paddingLeft: 16,
    height: 50,
    width: '100%',
    marginBottom: 24,
    fontWeight: '600',
    fontSize: 12,
    color: '#404447'
  }
})

export default Input;
