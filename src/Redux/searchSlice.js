import {createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'searchValue',
  initialState: {
    search: '',
    loading: false,
  },

  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});
export const {setSearch} = searchSlice.actions;

export default searchSlice.reducer;
