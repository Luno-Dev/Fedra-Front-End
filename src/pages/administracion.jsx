import React from 'react'
import Tablas from '../components/admi/Tablas'
import Navs from '@/components/common/Navs'
import TablasUsuarios from '@/components/admi/TablasUsuarios'
import { Helmet } from 'react-helmet'



const administracion = () => {




  return (

    <>
      <Helmet>
        <meta charSet="utf-8" />
        {/*     <link rel="shortcut icon" href={favicon} type="image/x-icon" /> */}
        <title>Administracion</title>
      </Helmet>
      <Navs />
      <div className='m-5 g-4' >
        <h1 className='text-center mb-3'>Administrar Publicaciones</h1>
        <Tablas />
      </div>
      <div className='m-5 g-4' >
        <h1 className='text-center mb-3'>Administrar Socios</h1>
        <TablasUsuarios />
      </div>
    </>
  )
}

export default administracion