import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import ProductDetail from "../ProductDetail";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../redux/actions/cart";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="productDetail"
        component={ProductDetail}
        options={({ route }) => ({
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          headerTitle: "Detail",
          title: route.params.item.category,
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
