import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface tokenState {
  isAuthenticated:boolean
  token: string|null;
}

const initialState: tokenState = {
  isAuthenticated:false,
  token: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.isAuthenticated =true;
    },
    setLogout(state, action:PayloadAction<String>) {
      state.token = null
      state.isAuthenticated =false;
      
    }
  },
});

export const { setLogout,setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;
