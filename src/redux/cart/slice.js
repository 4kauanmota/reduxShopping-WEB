import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.products.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity++;
        state.products = [...state.products];

        return;
      }

      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },

    increaseProductQuantity: (state, action) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: ++item.quantity }
          : item
      );
    },

    decreaseProductQuantity: (state, action) => {
      state.products = state.products
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: --item.quantity }
            : item
        )
        .filter((item) => item.quantity > 0);
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
