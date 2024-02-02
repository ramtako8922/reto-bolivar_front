import Head from "next/head";
import Image from "next/image";
import {  Roboto } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Pagelayout from "@/components/layout/pagelayout";
import logo from '../../public/logo-constructora-bolivar.svg'
import Cardinstruction from "@/components/instruction/cardinstruction";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {setIsAuthenticated } from "@/redux/slices/auth";



const inter = Roboto({
  subsets: ["latin"],
  weight: "300"
});

export default function Home() {

  const [accessToken, setAccessToken] = useState("");
  const dispatch=useDispatch()
  
  
  const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    
    const paramsSplitUp = paramsInUrl.reduce((accumulater: { [x: string]: any; }, currentValue: { split: (arg0: string) => [any, any]; }) => {

      const [key, value] = currentValue.split("=");
      accumulater[key] = value;
       return accumulater;
      }, {});
    
      return paramsSplitUp;
      
    }; 
    
   
  useEffect(() => {
  
      if (window.location.hash) {
        const { access_token, expires_in, token_type } =
          getReturnedParamsFromSpotifyAuth(window.location.hash);
            setAccessToken(access_token)
             const setAuth=dispatch(setIsAuthenticated(accessToken))
           
  

    };
  
  
  });

  return (
    <>
      <Pagelayout>
        <Head>
          <title>Inicio</title>
          <meta name="description" content="Pagina de inicio de la aplicación" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${styles.main} ${inter.className}`}>

          <section className={styles.secctionTitle}>
            <section className={styles.containerTitle}>
              <h1 className={styles.title}>¡Hola Apreciado colaborador Bienvenido este espacio Creado Para Ti!</h1>
            </section>
          </section>
          <section className={styles.secctionArticle}>
            <article className={styles.containerArticle}>
              <Image className={styles.image} src={logo} width={800} height={300} alt='logo' />
              <p className={styles.articleContent}>Pensando en tu bienestar la constructora Bolivar ha desarrollado este sitio donde podrás encotrar y escuchar a tus artistas favoritos mientras tomas tus pausas activas en tu jornada laboral.</p>
            </article>
          </section>
          <section className={styles.secctionInstructions}>
            <Cardinstruction number={"1"} content={"Ve a la opción buscar del menú principal, ya que allí encontrarás el buscardor del sitio."}></Cardinstruction>
            <Cardinstruction number={"2"} content={"Estando en la sección de buscar parate en la barra de busqueda y digita el nombre de tu artista,albun o canción favorita."}></Cardinstruction>
            <Cardinstruction number={"3"} content={"ve a la página de resultados donde para visualizar los resultados de tu busqueda y disfrutar de tu musica favorita."}></Cardinstruction>
          </section>
          <footer className={styles.containerFoter}>

          </footer>
        </main>
      </Pagelayout>
    </>
  );
}
