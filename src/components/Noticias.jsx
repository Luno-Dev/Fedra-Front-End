import { traerNoticias } from '@/helpers/fetchAdmi';
import React, { useEffect, useState } from 'react'
import { Card, Placeholder } from 'react-bootstrap';

const Noticias = (props) => {


  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategorias] = useState(props.categoria);
  const articulos = noticias.filter(datos => datos.categoria.nombre == categoria);

  const recibirData = async () => {

    const noticias = await traerNoticias();
    setNoticias(noticias.noticias);

  }

  useEffect(() => {
    recibirData();

  }, [])

  return (
    <>

      <div className="not-cont container">

        {
          articulos.length > 0 ?
            articulos.map(index => (
              <div key={index._id} className="noticias-card ">

                {index.imguno ?
                  <div className="card-img-noticia">
                    <img src={index.imguno} alt={index.titulo} /></div> : <></>}
                <div className="card-body-noticia d-flex flex-column">
                  <div className='m-3 noticias-titulo'>
                    <h4 className='titulo-noticiasrecientes'>{index.titulo}</h4>
                  </div>
                  <div className='cards-body'>
                    <p className='noticias-autor'>Autor {index.autor}</p>
                    <p className='noticias-fecha'>Publicado el {index.fecha.split("T", 1)}</p>
                    <a className='btn btn-danger fw-bold' href={`/noticias/${index._id}`}>Leer</a>
                  </div>

                </div>
              </div>
            )) :

            <div className='container d-flex flex-wrap justify-content-center gap-3 '>
              <Card style={{ width: '32%' }}>
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
              <Card style={{ width: '32%' }}>
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
              <Card style={{ width: '32%' }}>
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
            </div>

        }

      </div>

    </>
  )
}

export default Noticias