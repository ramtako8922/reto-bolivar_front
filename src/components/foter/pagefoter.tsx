import * as React from 'react';
import { Roboto } from 'next/font/google'
import foter from'@/components/foter/Pagefoter.module.scss'
const inter = Roboto({
  subsets: ['latin'],
  weight: '300'
})

export interface IAppProps {
}

export default function Pagefoter () {
  return (
    <div>
      <div className={`${foter.text} ${inter.className} `}>
       <p><strong>Constructora Bolivar 2023 </strong> Todos los derechos reservados</p>
      </div>
    </div>
  );
}
