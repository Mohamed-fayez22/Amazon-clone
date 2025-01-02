import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: null,
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    // ================Product Reducers Start Here =============
    // add to cart
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quanitity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },

    // increment quantity rom cart
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item.quanitity++;
    },
    // decrement quantity from cart

    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quanitity === 1) {
        item.quanitity = 1;
      } else {
        item.quanitity--;
      }
    },
    // Delete item for cart
    deleteItemInCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },

    // reset cart ti initialState
    clearAllItem: (state) => {
      state.products = [];
    },
    // =============== Product Reducers End Here =================

    // User Authntcation
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      
    },
    userSignOut: (state) => {
      state.userInfo = null
    }
  },
  //
});
 

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  deleteItemInCart,
  clearAllItem,
  setUserInfo,
  userSignOut,
} = amazonSlice.actions;
export default amazonSlice.reducer;
