import { traerNoticias } from '@/helpers/fetchAdmi';
import React, { useEffect, useState } from 'react'

const Noticias = (props) => {


const [noticias, setNoticias]= useState([]);
const [categoria, setCategorias]= useState(props.categoria);
const articulos = noticias.filter(datos => datos.categoria.nombre == categoria);
 
    console.log(noticias);
  const recibirData = async () => {

    const noticias = await traerNoticias();
    setNoticias(noticias.noticias); 
 
  }
   
  useEffect(() => {
    recibirData();

  }, [])

  return (
    <>

<div className="not-cont">

{
noticias.filter(datos => datos.categoria == categoria)  ?
articulos.map(index => (
  <div key={index._id} className="noticias-card ">

    {index.imguno ?
      <div className="card-img-noticia">
        <img src={index.imguno} alt={index.titulo} /></div> : <></>}
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
)): <span></span>

}

</div>

    </>
  )
}

export default Noticias