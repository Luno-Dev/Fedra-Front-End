import Navs from '@/components/common/Navs';
import { traerNoticia, traerNoticias } from '@/helpers/fetchAdmi';
import { getNoticias } from '@/helpers/fetchNoticias';
import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet'

const noticias = (props) => {

  const { noticia, noticias } = props;

  const data = noticias.noticias;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{noticia.titulo}</title>
      </Helmet>
      <Navs />
      <main>


        <div className='mt-5  container'>
          <h1 className='text-center'>{noticia.titulo}</h1>



          {
            noticia.img.length <= 1 ?

              <div className='mt-3 mb-3 d-flex justify-content-center'>
                <img src={noticia.img} height={400} width={500} />
              </div>
              :
              noticia.img.map(index => (
                <div key={index} className='d-flex gap-2 flex-wrap '>
                  <img src={index} width={20} />
                </div>
              ))

          } <span className='mt-5 m-2 fst-italic'>Autor: {noticia.autor} <span className='fst-italic'> Publicado: {noticia.fecha.split("T", 1)}</span></span>
          <div>{noticia.descripcion}</div>
        </div>
        <section className='container p-3'>
          <h2 className='text-center'>Mas Noticias</h2>
          <div className='d-flex justify-content-center flex-wrap'>
            {
              data.map(index => (
                <div key={index._id} className="noticias-card ">

                  {index.img ?
                    <div className="card-img-noticia">
                      <img src={index.img} alt="img" className='card-imagen-detalle-noticia' /></div> : <></>}
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


              ))
            }



          </div>

        </section>
      </main>
    </>

  )
}

export default noticias


export async function getStaticPaths() {



  const data = await traerNoticias();

  const paths = data.noticias.map(({ _id }) => ({ params: { id: `${_id}` } }));

  return {
    paths,
    fallback: false
  }


}



export async function getStaticProps({ params }) {
  try {
    const data = await traerNoticia(params.id);
    const data2 = await getNoticias();

    return {
      props: {
        noticia: data, noticias:
          data2
      }
    }
  } catch (error) {
    console.log(error);
  }
}