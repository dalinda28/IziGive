import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export const TextField = ({ placeholder, value, onTextChange }) => {
  const [isPassword, setIsPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        blurOnSubmit={true}
        autoCapitalize="none"
        onChangeText={(text) => onTextChange(text)}
        value={value}
        style={styles.textField}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#989898",
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    padding: 10,
    maxHeight: 50,
    borderRadius: 20,
  },
  textField: {},
});
