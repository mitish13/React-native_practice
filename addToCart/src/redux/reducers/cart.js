import * as constants from "../../constants";

const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
  isExist: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_TO_CART:
      const totalPrice = action.payload.price + state.totalPrice;
      const totalQuantity = state.totalQuantity + 1;
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalPrice: totalPrice,
        totalQuantity: totalQuantity,
      };
    case constants.CHECK_ITEM_EXIST_CART:
      const isExist = state.cart.find((item) => item.id == action.payload);
      if (isExist) return { ...state, isExist: true };
      else return { ...state, isExist: false };
    case constants.INCREMENT_CART: {
      //total price increase
      let itemPrice = action.payload.price;
      let newCart = action.payload.cart;
      //payload has entire cart
      return {
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + itemPrice,
        cart: newCart,
      };
    }
    case constants.DECREMENT_CART: {
      return {
        totalQuantity: state.totalQuantity - 1,
        totalPrice: state.totalPrice - action.payload.price,
        cart: action.payload.cart,
      };
    }
    case constants.REMOVE_FROM_CART: {
      // let itemToRemove = state.cart.find((item) => item.id == action.payload);
      // let updatedPrice =
      //   state.totalPrice - itemToRemove.price * itemToRemove.quantity;
      // let updatedQuantity = state.totalQuantity - itemToRemove.quantity;

      // let newCart = state.cart.filter((item) => item.id !== action.payload);
      return {
        totalQuantity: action.payload.totalQuantity,
        totalPrice: action.payload.totalPrice,
        cart: action.payload.cart,
      };
    }
    case constants.FETCH_CART: {
      return {
        cart: action.payload.cart,
        totalQuantity: action.payload.totalQuantity,
        totalPrice: action.payload.totalPrice,
      };
    }
    default:
      return state;
  }
};
