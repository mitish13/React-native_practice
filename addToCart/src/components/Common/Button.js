import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const CustomButton = ({ text, onSubmit, disabled }) => {
  return (
    <TouchableOpacity
      style={!disabled ? styles.buttonBlock : styles.disableButton}
      onPress={onSubmit}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBlock: {
    margin: 10,
    height: 50,
    padding: 10,
    backgroundColor: "orange",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
  },
  disableButton: {
    margin: 10,
    height: 50,
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 10,
  },
});

export default CustomButton;
