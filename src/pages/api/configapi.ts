// authHook.ts
import React from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from '@/redux/selectores';

 export const CLIEN_TID = ""; //Client id de spotify
 export const REDIRECT_URI = ""; // url cofigurada en la app de la API de Spotify
 export const SCOPE = "user-read-private user-read-email";
 
	  //Funcion que genera un estado aleatorio apartir de la cadena 
 const generateRandomString = (length: number) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
};

 const STATE=generateRandomString(16)

export const spotifyAuthorizedUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIEN_TID}&SCOPE=${SCOPE}&redirect_uri=${REDIRECT_URI}&state=${STATE}`;

 export  const useConfig= () => {
const accessToken =useSelector(getAuth)


 const options = {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
};
  

  return{
     options,
    accessToken

};


 }