import * as React from 'react';
import Pagelayout from '@/components/layout/pagelayout';
import Infobanner from '@/components/banner/infobanner';

import {  Roboto } from "next/font/google";
import  Head  from 'next/head';
import styles from '@/pages/results/Resultspage.module.scss'
import Login from '@/components/login/formlogin';
const inter = Roboto({
    subsets: ["latin"],
    weight: "300"
  });


interface LoginProps {
}

const LoginPage: React.FunctionComponent<LoginProps> = (props) => {
  return (
    
    <>
   
    
   <Pagelayout>
    <Head>
          <title>Login</title>
          <meta name="description" content="Iniciar Sesión" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className={`${styles.container} ${inter.className}`}>
        <Infobanner title={"Bienvenido(a)"} 
        content={"A continuación podrás iniciar sesión con los datos de tu cuenta en Spotify para poder encontrar tu música favorita"}>
        </Infobanner>
        <Login></Login>
        
        </main>
    
    </Pagelayout>
    </>
    

  )
};

export default LoginPage;
