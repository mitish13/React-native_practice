import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

const Product = ({ navigation, item }) => {
  // {
  //   console.log(item.image);
  // }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("productDetail", { item })}
    >
      <View style={styles.leftPart}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.cat}>{item.category}</Text>
          <Text style={styles.price}>{`$${item.price}`}</Text>
        </View>
      </View>
      <View style={styles.rightPart}>
        <Text style={styles.removeItemText}>&gt;</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: 5,
    marginTop: 0,
    padding: 5,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  textContainer: {
    flexDirection: "column",

    marginHorizontal: 5,
    justifyContent: "space-between",
  },
  image: {
    height: 80,
    width: 50,
    borderRadius: 10,
    alignSelf: "center",
  },
  leftPart: {
    flex: 8,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  rightPart: {
    flex: 2,
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    // borderColor: "black",
    // borderWidth: 1,
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  cat: {
    color: "gray",
  },
  price: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 14,
  },
  removeItemText: {
    fontSize: 24,
    color: "orange",
    fontWeight: "bold",
  },
});

export default Product;
