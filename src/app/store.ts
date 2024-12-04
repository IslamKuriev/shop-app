import { configureStore } from '@reduxjs/toolkit';
import { ShopSlice } from '../features/shopSlice';

export const store = configureStore({
  reducer: ShopSlice,
});

export type RootState = ReturnType<typeof store.getState>;
