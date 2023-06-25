import Navs from '@/components/common/Navs'
import React from 'react'
import { Helmet } from 'react-helmet'

const error = () => {
  return (

    <>
<div>
  <Helmet>
        <meta charSet="utf-8" />
        {/*     <link rel="shortcut icon" href={favicon} type="image/x-icon" /> */}
        <title>Error 404 - Pagina no Encontrada</title>
      </Helmet>
</div>
      
      <Navs />
      <div className="m-5 p-5 d-flex flex-column justify-content-center gap-3">
        <h1 className='text-center text-light '>Error 404 - Pagina no encontrada</h1>

        <button className='btn btn-danger w-25-lg-w50 align-self-center' onClick={() => location.replace("/")}>Volver a inicio</button>
      </div>
    </>

  )
}

export default error