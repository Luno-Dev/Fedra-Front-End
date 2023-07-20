import Navs from '@/components/common/Navs'
import React from 'react'
import { Helmet } from 'react-helmet'

import { useEffect, useState } from 'react';
import { getCategorias, traerNoticias } from '@/helpers/fetchAdmi';
import Noticias from '@/components/Noticias';
import { Card, Placeholder } from 'react-bootstrap';

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

      {categorias.length <= 1 ? 
      
      <Card style={{ width: '100%' }}>
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    </Card>
      
      :

        categorias.map(index => (


          <>
            <h2 className='text-center mt-3' >{index.nombre}</h2>
            <Noticias key={index._id} categoria={index.nombre} card={props.card} />
          </>


        ))

      }

    </>

  )
}
export default noticias


export const getServerSideProps = async () => {
  return {
    props: {
      categorias: await getCategorias(),
      card: await traerNoticias(),
      titulo: "hola"
    },
  };
}

