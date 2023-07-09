import Navs from '@/components/common/Navs';
import { traerNoticia, traerNoticias } from '@/helpers/fetchAdmi';
import React from 'react'
import { Helmet } from 'react-helmet'

const noticias = (props) => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.titulo}</title>
      </Helmet>
      <Navs />
      <main>


        <div className='mt-5  container'>
          <h1 className='text-center'>{props.titulo}</h1>



          {
            props.img.length <= 1 ?

              <div className='mt-3 mb-3 d-flex justify-content-center'>
                <img src={props.img} height={400} width={500} />
              </div>
              :
              props.img.map(index => (
                <div key={index} className='d-flex gap-2 flex-wrap '>
                  <img src={index} width={20} />
                </div>
              ))

          } <span className='mt-5 m-2 '>Autor: {props.autor} Publicado: {props.fecha.split("T", 1)}</span>
          <div>{props.descripcion}</div>
        </div>
        <section className='container p-3'>
          <h2 className='text-center'>Mas Noticias</h2>
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
    return {
      props: data,
    }
  } catch (error) {
    console.log(error);
  }
}