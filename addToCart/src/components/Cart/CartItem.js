import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
import {
  incrementCart,
  decrementCart,
  removeFromCart,
} from "../../redux/actions/cart";
import { useDispatch } from "react-redux";

const CartItem = ({ navigation, item }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftPart}
        onPress={() => navigation.navigate("productDetail", { item })}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.cat}>{item.category}</Text>
          <Text style={styles.price}>{`$${item.totalPrice}`}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.rightPart}>
        {/* remove from cart */}
        <TouchableOpacity
          style={styles.removeItemContainer}
          onPress={() => dispatch(removeFromCart(item.id))}
        >
          <Text style={styles.removeItemText}>X</Text>
        </TouchableOpacity>
        {/* inc dec */}
        <View style={styles.buttonContainer}>
          {/* dec */}
          <TouchableOpacity onPress={() => dispatch(decrementCart(item.id))}>
            <Text style={styles.cartButton}>-</Text>
          </TouchableOpacity>
          {/* quant */}
          <Text
            style={{
              color: "black",
              marginHorizontal: 5,
              alignSelf: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {item.quantity}
          </Text>
          {/* inc */}
          <TouchableOpacity onPress={() => dispatch(incrementCart(item.id))}>
            <Text style={styles.cartButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    flex: 3,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  rightPart: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column", // def
    height: "100%",
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
  // rightPartText: {
  //   color: "orange",
  //   fontSize: 29,
  //   fontWeight: "bold",
  // },
  buttonContainer: {
    flexDirection: "row",
    // borderColor: "black",
    // borderWidth: 1,
    justifyContent: "space-between",
  },
  cartButton: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  removeItemContainer: {
    alignItems: "flex-end",
  },
  removeItemText: {
    fontSize: 24,
    color: "red",
    fontWeight: "bold",
  },
});

export default CartItem;
