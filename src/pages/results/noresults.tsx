import * as React from 'react';
import Pagelayout from '@/components/layout/pagelayout';
import Infobanner from '@/components/banner/infobanner';

import {  Roboto } from "next/font/google";
import  Head  from 'next/head';
import styles from '@/pages/results/Resultspage.module.scss'
const inter = Roboto({
    subsets: ["latin"],
    weight: "300"
  });


interface NoResultsPageProps {
}

const Noresultspage: React.FunctionComponent<NoResultsPageProps> = (props) => {
  return (
    
    <>
   
    
   <Pagelayout>
    <Head>
          <title>No Resultados</title>
          <meta name="description" content="pAGINA SIN RESULTADOS" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className={`${styles.container} ${inter.className}`}>
        <Infobanner title={"Resultados"} 
        content={"En este momento no puede visualizar los resultados porque no ha iniciado sesión con su cuenta de SpotiFy"}>
        </Infobanner>
        
        </main>
    
    </Pagelayout>
    </>
    

  )
};

export default Noresultspage;
