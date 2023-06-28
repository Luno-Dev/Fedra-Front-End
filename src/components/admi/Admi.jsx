import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import TablasUsuarios from './TablasUsuarios';
import Tablas from './Tablas';



const Admi = () => {

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

      <div className="container">
        <div className='my-5 g-4' >
          <h4>Usuario conectado: {usuarioOnline}</h4>
          <h1 className='text-center mb-3'>Administrar Noticias</h1>
          <Tablas/>
        </div>

        <div className='my-5 g-4' >
          <h1 className='text-center mb-3'>Administrar Socios</h1>
          <TablasUsuarios />
        </div>
      </div>
    </>
  )
}

export default Admi