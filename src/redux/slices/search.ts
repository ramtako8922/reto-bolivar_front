import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchTermState {
  searchTerm: string;
}

const initialState: SearchTermState = {
  searchTerm: "",
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
