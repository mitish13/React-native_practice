import React, { useEffect } from "react";
import HomeComponent from "../../components/Home";
import { fetchItems } from "../../redux/actions/item";
import { useDispatch, useSelector } from "react-redux";

import { View, ActivityIndicator } from "react-native";

const Home = (props) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.item);
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        // We need to pass navigation prop to HomeComponent because we r getting it from tabNavigator, in which both CartScreen and HomeScreen will have navigation prop to move to product detail
        <HomeComponent navigation={props.navigation} />
      )}
    </View>
  );
};

export default Home;
