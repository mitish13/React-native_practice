import React from "react";
import CartComponent from "../../components/Cart";

import { View } from "react-native";

const Cart = (props) => {
  return (
    <View>
      {/* // We need to pass navigation prop to CartComponent because we r getting it from tabNavigator, in which both CartScreen and HomeScreen will have navigation prop to move to product detail */}
      <CartComponent navigation={props.navigation} />
    </View>
  );
};

export default Cart;
