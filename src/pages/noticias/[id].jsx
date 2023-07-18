import Navs from '@/components/common/Navs';
import { traerNoticia, traerNoticias } from '@/helpers/fetchAdmi';
import { getNoticias } from '@/helpers/fetchNoticias';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

const noticias = (props) => {

  const { noticia, noticias } = props;
  const [imagenes, setImagenes] = useState({
    imguno: "",
    imgdos: "",
    imgtres: "",
    imgcuatro:"",
    imgcinco:""
  });


  const data = noticias.noticias;
  imagenes.imguno = noticia.imguno;
  imagenes.imgdos = noticia.imgdos;
  imagenes.imgtres = noticia.imgtres;
  imagenes.imgcuatro = noticia.imgcuatro;
  imagenes.imgcinco = noticia.imgcinco;



  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{noticia.titulo}</title>
      </Helmet>
      <Navs />
      <main>

        <div className='mt-5 text-center container '>
          <h1 className='text-center'>{noticia.titulo}</h1>
          <div className='d-flex gap-3 flex-wrap justify-content-start'>
            {imagenes.imguno ?
              <div className='mt-3 mb-3 imagen-c d-flex justify-content-center imagen-detalle'>
                <img src={imagenes.imguno} alt={noticia.titulo} className='imagen-n-c' />
              </div> : <></>

            }
            {imagenes.imgdos ?
              <div className='mt-3 mb-3 imagen-c d-flex justify-content-center imagen-detalle'>
                <img src={imagenes.imgdos} alt={noticia.titulo} className='imagen-n-c' />
              </div> : <></>
            }
            {imagenes.imgtres ?
              <div className='mt-3 mb-3 imagen-c d-flex justify-content-center imagen-detalle'>
                <img src={imagenes.imgtres} alt={noticia.titulo} className='imagen-n-c' />
              </div> : <></>
            }
            {imagenes.imgcuatro ?
              <div className='mt-3 mb-3 imagen-c d-flex justify-content-center imagen-detalle'>
                <img src={imagenes.imgcuatro} alt={noticia.titulo} className='imagen-n-c' />
              </div> : <></>
            }
            {imagenes.imgcinco ?
              <div className='mt-3 mb-3 imagen-c d-flex justify-content-center imagen-detalle'>
                <img src={imagenes.imgcinco} alt={noticia.titulo} className='imagen-n-c' />
              </div> : <></>
            }
          </div>

          <span className='mt-5 m-2 fst-italic'> <span className='fst-italic'> Publicado: {noticia.fecha.split("T", 1)}</span></span>
          <div>{noticia.descripcion}</div>
        </div>
        <section className='container p-3'>
          <h2 className='text-center'>Mas Noticias</h2>
          <div className='d-flex  flex-wrap  justify-content-center justify-content-sm-start'>
            {
              data.map(index => (
                <div key={index._id} className="noticias-card ">

                  {index.imguno ?
                    <div className="card-img-noticia">
                      <img src={index.imguno} alt={data.titulo} className='card-imagen-detalle-noticia' /></div> : <></>}
                  <div className="card-body-noticia d-flex flex-column">
                    <div className='mt-3 noticias-titulo'>
                      <h4 className='titulo-noticiasrecientes'>{index.titulo}</h4>
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
    fallback: true
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