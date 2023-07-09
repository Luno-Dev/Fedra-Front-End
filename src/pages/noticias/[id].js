import Navs from '@/components/common/Navs';
import { traerNoticia, traerNoticias } from '@/helpers/fetchAdmi';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

const noticias = (props) => {


  console.log( props.img.length <=1 
    );
  
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
   <title>{props.titulo}</title>
      </Helmet>
      <Navs/>
        <main>

        
  <div  className='mt-5  container'>
        <h1 className='text-center'>{props.titulo}</h1>

        <span className='mt-5'>Autor: {props.autor} Publicado: {props.fecha.split("T", 1)}</span>

      {
        props.img.length <=1 ? 
        
        <div>
        <img src={props.img} height={500} width={400}/>
        </div>
        :
       
        
        props.img.map(index =>(
          <div key={index}>
          <img src={index} width={20}/>
          </div>
        )) 
      }
        
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

  const paths = data.noticias.map(({_id})=> ({params:{id: `${_id}`}}));

  return {
    paths,
    fallback: false
  }


}



export async function getStaticProps( {params} ) {
  try {
    const data = await traerNoticia(params.id);
    return {
      props: data,
    }
  } catch (error) {
    console.log(error);
  }
}