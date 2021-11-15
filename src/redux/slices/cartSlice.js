import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  cartItems: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
  counter: 0,
  anchorEl: null,
  isEmpty: null,
  totalQuantity: 0,
};

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setAnchorEl: (state, action) => {
      state.anchorEl = action.payload;
    },
    setIsEmpty: (state, action) => {
      state.isEmpty = action.payload;
    },
    deleteItem: (state, action) => {
      const { productId, size } = action.payload;
      const index = state.cartItems.findIndex(
        (item) => item.productId === productId && item.size === size
      );
      state.cartItems.splice(index, 1);
      if (state.cartItems.length === 0) {
        state.anchorEl = null;
      }
      const reducer = (acc, item) => acc + item.quantity;
      state.totalQuantity = state.cartItems.reduce(reducer, 0);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    addItem: (state, action) => {
      const match = state.cartItems.find(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size
      );
      const index = state.cartItems.indexOf(match);
      match
        ? (state.cartItems[index].quantity += action.payload.quantity)
        : state.cartItems.push(action.payload);
      const reducer = (acc, item) => acc + item.quantity;
      state.totalQuantity = state.cartItems.reduce(reducer, 0);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    rewriteCart: (state, action) => {
      state.cartItems = action.payload;
      state.totalQuantity = state.cartItems.quantity;
    },
  },
});

export const { setAnchorEl, setIsEmpty, deleteItem, addItem, rewriteCart } =
  cart.actions;

export default cart.reducer;
