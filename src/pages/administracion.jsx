import React, { useEffect, useState } from 'react'
import Tablas from '../components/admi/Tablas'
import Navs from '@/components/common/Navs'
import TablasUsuarios from '@/components/admi/TablasUsuarios'
import { Helmet } from 'react-helmet'



const administracion = () => {

  const [usuarioOnline, setUsuarioOnline] = useState("");


  useEffect(() => {

    setUsuarioOnline(JSON.parse(localStorage.getItem('nombreUsuario')));
  }, [])



  return (

    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          {/*     <link rel="shortcut icon" href={favicon} type="image/x-icon" /> */}
          <title>Administracion</title>
        </Helmet>
      </div>

      <Navs />
      <div className="container">
        <div className='my-5 g-4' >
          <h4>Usuario conectado: {usuarioOnline}</h4>
          <h1 className='text-center mb-3'>Administrar Publicaciones</h1>
          <Tablas />
        </div>

        <div className='my-5 g-4' >
          <h1 className='text-center mb-3'>Administrar Socios</h1>
          <TablasUsuarios />
        </div>
      </div>
    </>
  )
}

export default administracion