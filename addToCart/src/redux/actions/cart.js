import * as constants from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const addToCart = (id) => async (dispatch, getState) => {
  //getState() has all the reducer in it, just call reducer from which you need to use state
  const { items } = getState().item;

  // item first time will be added in cart, quantity=1
  const itemToAdd = items.find((item) => item.id == id);
  itemToAdd.quantity = 1;
  itemToAdd.totalPrice = itemToAdd.price;

  dispatch({ type: constants.ADD_TO_CART, payload: itemToAdd });
  dispatch(updateCartInStorage());
};

export const checkItemExist = (id) => {
  return { type: constants.CHECK_ITEM_EXIST_CART, payload: id };
};
export const incrementCart = (id) => (dispatch, getState) => {
  //already added in cart
  const { cart } = getState().cart;

  //increase the quantity by 1
  const itemToEdit = cart.find((item) => item.id == id);
  itemToEdit.quantity += 1;
  itemToEdit.totalPrice = itemToEdit.quantity * itemToEdit.price;
  dispatch({
    type: constants.INCREMENT_CART,
    payload: { cart: cart, price: itemToEdit.price },
  });
  dispatch(updateCartInStorage());
};

export const decrementCart = (id) => (dispatch, getState) => {
  const { cart } = getState().cart;
  let itemToEdit = cart.find((item) => item.id == id);
  //increase the quantity by 1
  if (itemToEdit.quantity == 1) {
    //remove from cart
    dispatch(removeFromCart(id));
  } else {
    itemToEdit.quantity -= 1;
    itemToEdit.totalPrice = itemToEdit.quantity * itemToEdit.price;
    dispatch({
      type: constants.DECREMENT_CART,
      payload: {
        id: id,
        cart: cart,
        price: itemToEdit.price,
      },
    });
    dispatch(updateCartInStorage());
  }
};
export const removeFromCart = (id) => (dispatch, getState) => {
  let { cart, totalPrice, totalQuantity } = getState().cart;
  let itemToRemove = cart.find((item) => id == item.id);
  let updatedPrice = totalPrice - itemToRemove.price * itemToRemove.quantity;
  let updatedQuantity = totalQuantity - itemToRemove.quantity;

  let newCart = cart.filter((item) => item.id !== id);

  dispatch({
    type: constants.REMOVE_FROM_CART,
    payload: {
      cart: newCart,
      totalQuantity: updatedQuantity,
      totalPrice: updatedPrice,
    },
  });
  dispatch(updateCartInStorage());
};

// export const saveCart = () => async (dispatch, getState) => {
//   const { cart } = getState().cart;
//   await AsyncStorage.setItem("cart", JSON.stringify(data));
//   console.log(AsyncStorage.getItem("cart"));
// };

// export const fetchCart = () => async (dispatch, getState) => {
//   // await AsyncStorage.removeItem("cart")
//   //   .then((val) => console.log(val))
//   //   .catch((err) => console.log(err));
//   // const cart = await AsyncStorage.getItem("cart").then((val) => {
//   //   return JSON.parse(val);
//   // });
//   // const totalPrice = await AsyncStorage.getItem("totalPrice").then((val) => {
//   //   return parseInt(val);
//   // });
//   // const totalQuantity = await AsyncStorage.getItem("totalQuantity").then(
//   //   (val) => {
//   //     return parseInt(val);
//   //   }
//   // );

//   const cartData = await AsyncStorage.getItem("cartData").then((val) => {
//     return JSON.parse(val);
//   });

//   console.log(cartData);
//   console.log(cartData.totalPrice);

//   if (
//     cartData.cart.length !== 0 &&
//     cartData.totalPrice !== 0 &&
//     cartData.totalQuantity !== 0
//   ) {
//     dispatch({
//       type: constants.FETCH_CART,
//       payload: {
//         cart: cartData.cart,
//         totalPrice: cartData.totalPrice,
//         totalQuantity: cartData.totalQuantity,
//       },
//     });
//   }
// };

export const updateCartInStorage = () => async (dispatch, getState) => {
  const { cart, totalPrice, totalQuantity } = getState().cart;
  // console.log(cart);
  const cartData = {
    cart,
    totalPrice,
    totalQuantity,
  };

  await AsyncStorage.setItem("cartData", JSON.stringify(cartData));
};

export const fetchCart = () => async (dispatch) => {
  const data = await AsyncStorage.getItem("cartData").then((val) => {
    return JSON.parse(val);
  });
  dispatch({
    type: constants.FETCH_CART,
    payload: {
      cart: data.cart,
      totalPrice: data.totalPrice,
      totalQuantity: data.totalQuantity,
    },
  });
};
