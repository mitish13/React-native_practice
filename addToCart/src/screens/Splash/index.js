import React from "react";
import { View, Image } from "react-native";

export default function Splash() {
  console.log("called");
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "white" }}
    >
      <Image
        source={require("../../assets/images/logo.jpg")}
        resizeMode={"contain"}
        style={{ width: "100%" }}
      />
    </View>
  );
}
