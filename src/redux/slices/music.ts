import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiCall from "../../pages/api/index";
import { options } from "../../pages/api/configapi";
 

export interface FetchMusicPayload {
    
    word: string;
}
    export interface MusicState {
  
  isLoading: boolean;
  data: any[]; // Ajusta el tipo según la estructura real de tus datos
  error: any; // Ajusta el tipo según la estructura real de tus errores
  
}

const initialState: MusicState = {
  isLoading: false,
  data: [],
  error: null,
};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    fetchMusicLoading(state) {
      state.isLoading = true;
    },
    fetchMusicError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    fetchMusicSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
});


export const fetchMusic = (word: string) => async (dispatch: any) => {
  try {
    dispatch(fetchMusicLoading());

    const result = await apiCall({ url: `/search/?q=${word}&type=album,track,artist&offset=0&limit=10&numberOfTopResults=5`,options });

    
    dispatch(fetchMusicSuccess(result.tracks.items));
    
  } catch (error) {
    dispatch(fetchMusicError(error));
  }
};

export const { fetchMusicLoading, fetchMusicError, fetchMusicSuccess } = musicSlice.actions;
export default musicSlice.reducer;
