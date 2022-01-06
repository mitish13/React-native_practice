import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import Product from "./Product.js";

const HomeComponent = ({ navigation }) => {
  const { items } = useSelector((state) => state.item);
  const renderItem = (item) => {
    return <Text>{item.id}</Text>;
  };
  return (
    <View>
      {/* In renderItem function Flatlist  */}
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Product item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default HomeComponent;
