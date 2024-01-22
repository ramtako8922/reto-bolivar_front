const BASE_URL = "https://api.spotify.com/v1";


interface ApiCallParams {
  url: string;
  options?: RequestInit;
}

interface ApiResponseItem {
  data: {
    uri: string;
    id: string;
    name: string;
    albumOfTrack: any; 
    artists: any; 
    contentRating: any; 
    duration: any; 
    playability: any; 
  };
}


export default async function apiCall({ url, options }: ApiCallParams): Promise<ApiResponseItem[]> {
  try {
    const response = await fetch(`${BASE_URL}${url}`, options);
    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}
