import React from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartComponent = ({ navigation }) => {
  const { cart, totalPrice } = useSelector((state) => state.cart);
  // console.log(cart);
  return (
    <View style={styles.container}>
      {cart.length == 0 ? (
        <Text style={styles.emptyCartText}> Cart is Empty</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={({ item }) => (
              <CartItem item={item} navigation={navigation} />
            )}
            ListFooterComponent={() => {
              return (
                <View style={styles.priceContainer}>
                  <Text
                    style={{ fontSize: 20, color: "black", fontWeight: "bold" }}
                  >
                    Total
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "orange",
                      fontWeight: "bold",
                    }}
                  >{`$${Math.round(totalPrice)}`}</Text>
                </View>
              );
            }}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "column",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  emptyCartText: {
    alignSelf: "flex-start",
    fontSize: 18,
    justifyContent: "center",
    color: "black",
    margin: 10,
  },
});

export default CartComponent;
