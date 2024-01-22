

//selectores para llamar el estado a utilizar en la interfaz

import {RootState} from '../../types';

export const getMusicLoading = (state: RootState): boolean =>state.music.isLoading;
export const getMusicError = (state: RootState): any => state.music.error;
export const getMusic = (state:RootState): any[] => state.music.data;
export const getSearchTerm=(state:RootState):string=>state.search.searchTerm