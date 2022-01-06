import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/Home";
import CartScreen from "../../screens/Cart";
import { useSelector, useDispatch } from "react-redux";
// import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import { TouchableOpacity, Text } from "react-native";
import { logout } from "../../redux/actions/login";
const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <Icon name="home" size={size} color={color} />;
          } else if (route.name === "Cart") {
            return <Icon name="shopping-cart" size={size} color={color} />;
          }
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "orange",
        tabBarStyle: {
          height: 55,
        },
        tabBarItemStyle: {
          borderWidth: 1,
          borderColor: "lightgray",
        },
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => dispatch(logout())}>
              <Text
                style={{
                  color: "orange",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginRight: 10,
                }}
              >
                Logout
              </Text>
            </TouchableOpacity>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarBadge: totalQuantity !== 0 ? totalQuantity : null,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
