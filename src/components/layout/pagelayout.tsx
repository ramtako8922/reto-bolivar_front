import React, { FC, ReactNode } from 'react'
import NaVbar from '../bar/navbar';
import Pagefoter from '../foter/pagefoter';
import layout from '@/components/layout/Pagelayout.module.scss'

interface pagelayoutprops{
    children:ReactNode
}

const Pagelayout:FC<pagelayoutprops> = ({children}) => {
  return (
    <div className={layout.container}>
    <NaVbar></NaVbar>
    <main className={layout.main}>{children}</main>
    <footer className={layout.foter}>
    <Pagefoter></Pagefoter>
    </footer>
    </div>
  )
}

export default Pagelayout
