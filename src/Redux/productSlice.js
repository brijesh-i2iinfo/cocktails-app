import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {cocktails} from '../utils/cocktails';
const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
  },

  reducers: {},

  extraReducers: builder => {
    builder.addCase(fatchProducts.pending, state => {
      state.loading = true;
    });

    builder.addCase(fatchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });

    builder.addCase(fatchProducts.rejected, state => {
      state.loading = false;
    });
  },
});

export const fatchProducts = createAsyncThunk(
  'products / fatchProducts',
  async () => {
    return cocktails;
  },
);

export default productSlice.reducer;
