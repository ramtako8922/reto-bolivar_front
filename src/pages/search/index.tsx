import * as React from 'react';
import Pagelayout from '@/components/layout/pagelayout';
import Infobanner from '@/components/banner/infobanner';
import SearchBar from '@/components/searchbar/search';
import {  Roboto } from "next/font/google";
import  Head  from 'next/head';
import styles from '@/pages/search//Searchpage.module.scss'
const inter = Roboto({
    subsets: ["latin"],
    weight: "300"
  });


interface SearchPageProps {
}

const SearchPage: React.FunctionComponent<SearchPageProps> = (props) => {
  return (
    
    <>
   
    
   <Pagelayout>
    <Head>
          <title>Buscar</title>
          <meta name="description" content="Pagina para buscar la música favorita de nuestros colaborradores" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className={`${styles.container} ${inter.className}`}>
        <Infobanner title={"Buscar"} 
        content={"En estta seccion podrás encontrar la músca de tus artistas favoritos a través de Spotify, recuerda que los resultados se visualizan en la página de resultados una vez hayas inniciado sesión con tu cuenta de SpotiFy"}>
        </Infobanner>
        <SearchBar/>
        </main>
    
    </Pagelayout>
    </>
    

  )
};

export default SearchPage;
