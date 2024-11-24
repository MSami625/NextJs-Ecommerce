import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial state
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as { productName: string; price: number; size: string; quantity: number }[],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
