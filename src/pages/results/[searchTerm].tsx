import * as React from 'react';
import Pagelayout from '@/components/layout/pagelayout';
import Infobanner from '@/components/banner/infobanner';

import {  Roboto } from "next/font/google";
import  Head  from 'next/head';
import styles from '@/pages/results/Resultspage.module.scss'
import Card from '@/components/cardSong/songcard';
import {  useDispatch, useSelector } from 'react-redux';
import {getMusicLoading,getMusicError,getMusic,getSearchTerm} from '@/redux/selectores'
import { fetchMusic,FetchMusicPayload } from '@/redux/slices/music';
import { useConfig } from '../api/configapi';
import PrivateRoute from '@/components/routes/PrivateRoute';



const inter = Roboto({
    subsets: ["latin"],
    weight: "300"
  });


interface ResultsPageProps {

}
  

const Resultspage: React.FunctionComponent<ResultsPageProps> = (props) => {
  const dispatch = useDispatch();
  const infoLoading = useSelector(getMusicLoading);
  const infoError = useSelector(getMusicError);
  const info = useSelector(getMusic);
  const{options}=useConfig()



  const searchTerm = useSelector(getSearchTerm)
  

  React.useEffect(() => {
    dispatch(fetchMusic(searchTerm,options))
    
  }, [searchTerm]); // Asegúrate de incluir searchTerm como dependencia

  return (
    <PrivateRoute>
    <>
      <Pagelayout>
        <Head>
          <title>Resultados</title>
          {/* ... (otras etiquetas meta y enlace) */}
        </Head>
        <main className={`${styles.container} ${inter.className}`}>
          <Infobanner
            title={"Resultados"}
            content={"Los resultados encontrados de acuerdo a tu búsqueda son los siguientes:"}
          />
          {infoLoading && <p>Cargando...</p>}
          {infoError && !info && <p>Ocurrió un error al consultar la información</p>}
          {Array.isArray(info) &&
            info?.map((artist, index) => <Card key={index} artist={artist} />)}
        </main>
      </Pagelayout>
    </>
    </PrivateRoute>
  );
};

export default Resultspage;