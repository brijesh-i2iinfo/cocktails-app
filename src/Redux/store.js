import {configureStore} from '@reduxjs/toolkit';
import productSlice from './productSlice';
import searchSlice from './searchSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    search: searchSlice,
  },
});
