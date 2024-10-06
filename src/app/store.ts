import { configureStore } from "@reduxjs/toolkit";
import { ShopReducer } from "../features/shopReducer";

export const store = configureStore({
  reducer: ShopReducer
});

export type RootState = ReturnType<typeof store.getState>;
