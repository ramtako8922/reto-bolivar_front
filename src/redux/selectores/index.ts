

//selectores para llamar el estado a utilizar en los componentes y páginas de la aplicación

import {RootState} from '../../types';

export const getMusicLoading = (state: RootState): boolean =>state.music.isLoading;
export const getMusicError = (state: RootState): any => state.music.error;
export const getMusic = (state:RootState): any[] => state.music.data;
export const getSearchTerm=(state:RootState):string=>state.search.searchTerm
export const getLogin=(state:RootState):boolean=>state.auth.isAuthenticated
export const getAuth=(state:RootState):string=>state.auth.token