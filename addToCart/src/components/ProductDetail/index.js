import React, { useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../Common/Button";
import { addToCart, checkItemExist } from "../../redux/actions/cart";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = ({ route, navigation }) => {
  const item = route.params.item;
  const dispatch = useDispatch();
  const { isExist, cart } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(checkItemExist(item.id));
  }, [cart]);

  return (
    <ScrollView style={styles.container}>
      {/* image */}
      <Image
        source={{ uri: item.image }}
        style={{
          margin: 10,
          height: 400,
          width: 400,
          alignSelf: "center",
        }}
      />
      <View style={styles.midPart}>
        <View style={styles.midPartView1}>
          <Text style={styles.midPartTextTitle}>{item.title}</Text>
        </View>
        <View style={styles.midPartView2}>
          <Text style={styles.midPartTextPrice}>{`$${item.price}`}</Text>
        </View>
      </View>
      <View style={styles.desc}></View>
      {/* title === price */}
      {/* Description */}
      <Text
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 20,
        }}
      >
        Description
      </Text>
      <Text style={{ color: "black", fontSize: 16, marginTop: 20 }}>
        {item.description}
      </Text>
      {/* Add to cart */}
      <TouchableOpacity style={{ justifyContent: "flex-end" }}>
        <CustomButton
          text="Add To Cart"
          onSubmit={() => {
            dispatch(addToCart(item.id)), navigation.navigate("Cart");
          }}
          disabled={isExist}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
  },
  midPart: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  midPartView1: {
    flex: 8,
  },
  midPartView2: {
    flex: 2,
    alignItems: "flex-end",
  },
  midPartTextTitle: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  midPartTextPrice: {
    color: "orange",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default ProductDetail;
