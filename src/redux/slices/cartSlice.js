import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  cartItems: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
  counter: 0,
  anchorEl: null,
  isEmpty: null,
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
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
  },
});

export const { setAnchorEl, setIsEmpty, deleteItem, addItem } = cart.actions;

export default cart.reducer;
