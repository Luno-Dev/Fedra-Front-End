import Navs from '@/components/common/Navs'
import React from 'react'
import { Helmet } from 'react-helmet'
import { traerNoticias } from '@/helpers/fetchAdmi';
import { useContext, useEffect, useState } from 'react';
import DataContext from '../components/context/DataContext';

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

              {index.img < 1 ?
                <div className="card-img-noticia">
                  <img src={index.img} alt="img" /></div> : <span></span>}

              <div className="card-body-noticia">
                <h3 className='noticias-titulo mt-5'>{index.titulo}</h3>
                <p className='noticias-descripcion'>{index.descripcion}</p>

                <p className='noticias-autor'>{index.autor}</p>
                <p className='noticias-fecha'>{index.fecha.split("T", 1)}</p>

              </div>
            </div>
          ))}





        </div>

      </div>

    </>

  )
}

export default noticias