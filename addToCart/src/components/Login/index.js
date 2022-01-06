import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import CustomButton from "../Common/Button.js";

const LoginComponent = ({ error, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ backgroundColor: "white", flex: 1, padding: 10 }}
    >
      <Image
        source={require("../../assets/images/logo.jpg")}
        style={styles.logo}
      />
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Email</Text>
        <TextInput
          value={email}
          style={styles.inputField}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.inputText}>Password</Text>

        <TextInput
          value={password}
          style={styles.inputField}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <CustomButton
          text="Login"
          onSubmit={() => {
            onSubmit(email, password);
          }}
        />
        {error && <Text style={styles.errorMsg}>{error}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: Dimensions.get("screen").height / 5,
    width: Dimensions.get("screen").width,
  },

  inputField: {
    padding: 10,
    fontSize: 14,
    borderColor: "black",
    fontWeight: "bold",
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    color: "black",
  },
  inputBox: {
    margin: 5,
  },
  inputText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  errorMsg: {
    color: "red",
    fontSize: 16,
    alignSelf: "flex-start",
  },
});
export default LoginComponent;
