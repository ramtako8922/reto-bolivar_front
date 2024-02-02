import React, { useState, FormEvent, useEffect } from "react";
import loginStyles from '@/components/login/Login.module.scss';
import { useRouter } from "next/router";
import {spotifyAuthorizedUrl} from '../../pages/api/configapi'


const Login: React.FC = () => {
const router=useRouter()




const startAuthorization = () => {
  window.location.href = `${spotifyAuthorizedUrl}`;



};


return (
  <div className={loginStyles.container}>
    <button onClick={startAuthorization} type="submit">
      Iniciar sesión
    </button>
  </div>
);
};
  
   
  

 

export default Login;
