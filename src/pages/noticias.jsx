import Navs from '@/components/common/Navs'
import React from 'react'
import { Helmet } from 'react-helmet'

import { useEffect, useState } from 'react';
import { getCategorias, traerNoticias } from '@/helpers/fetchAdmi';
import Noticias from '@/components/Noticias';

const noticias = (props) => {
  const [categorias, setCategorias] = useState(props.categorias);

  
  return (
    <>

      <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>Noticias</title>
        </Helmet>
      </div>

      <Navs />

 { categorias.length <= 1 ? <span> </span> :

  categorias.map(index => (


    <>
        <h2 className='text-center' key={index._id}>{index.nombre}</h2>
    <Noticias categoria={index.nombre} card={props.card}/> 
    </>

    
  ))
  
}
    
    </>
    
  )
}
export default noticias


export  const getServerSideProps = async () =>{
  return{
  props:{
    categorias: await  getCategorias(),
    card: await  traerNoticias(),
    titulo: "hola"
  },
  };
}

