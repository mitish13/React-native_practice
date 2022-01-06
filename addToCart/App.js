import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { AppState } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useSelector } from "react-redux";

import AppNavigator from "./src/components/navigation";

const App = () => {
  // const { cart, totalPrice, totalQuantity } = useSelector(
  //   (state) => state.cart
  // );
  // const appState = useRef(AppState.currentState);
  // const [appStateVisible, setAppStateVisible] = useState(appState.current);
  // // const saveCart = async () => {
  //   const cartData = {
  //     cart,
  //     totalPrice,
  //     totalQuantity,
  //   };
  //   await AsyncStorage.setItem("cartData", JSON.stringify(cartData));
  // };

  // useEffect(() => {
  //   // Using AppState to determine that user is still using the app or app is in background/close
  //   // To update the cart before closing the app
  //   const subscription = AppState.addEventListener("change", (nextAppState) => {
  //     if (
  //       appState.current.match(/inactive|background/) &&
  //       nextAppState === "active"
  //     ) {
  //       console.log("App has come to the foreground!");
  //     }

  //     appState.current = nextAppState;
  //     setAppStateVisible(appState.current);
  //     console.info("AppState", appState.current);
  //     // if (appState.current == "background") saveCart();
  //     // else null;
  //   });
  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
