import Navs from '@/components/common/Navs'
import React from 'react'
import { Helmet } from 'react-helmet'
import { traerNoticias } from '@/helpers/fetchAdmi';
import { useEffect, useState } from 'react';

const noticias = () => {
  const [noticias, setNoticias] = useState([]);

  const recibirData = async () => {

    const noticias = await traerNoticias();
    setNoticias(noticias.noticias);

  }
  useEffect(() => {
    recibirData();


  }, [])

  return (
    <>

      <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>Noticias</title>
        </Helmet>
      </div>

      <Navs />
      <div className='Contenedor-noticias'>
        <h1 className='text-center'>Noticias</h1>
        <div className="not-cont">


          {noticias.map(index => (
            <div key={index._id} className="noticias-card ">

              {index.img ?
                <div className="card-img-noticia">
                  <img src={index.img} alt="img" /></div> : <></>}
              <div className="card-body-noticia d-flex flex-column">
                <div className='mt-3 noticias-titulo'>
                  <h4>{index.titulo}</h4>
                </div>
                <div className='cards-body'>
                  <p className='noticias-autor'>Autor {index.autor}</p>
                  <p className='noticias-fecha'>Publicado el {index.fecha.split("T", 1)}</p>
                  <a className='btn btn-danger fw-bold' href={`/noticias/${index._id}`}>Mirar</a>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>

    </>

  )
}

export default noticias