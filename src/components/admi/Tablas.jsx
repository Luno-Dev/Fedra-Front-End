import { deleteNoticia, traerNoticias } from '@/helpers/fetchAdmi';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function Tablas() {

  const [noticias, setNoticias] = useState([]);


  const recibirData = async () => {

    const noticias = await traerNoticias();
    setNoticias(noticias.noticias);
  }

  console.log(noticias);

  

  const eliminarpublicacion= (id)=>{
    swal({
      title: "Esta seguro?",
      text: "Esta accion es inreversible!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Publicacion eliminado con Exito!", {
          icon: "success",
        });
        deleteNoticia(id);
        console.log(id);
      } else {
        swal("Operacion cancelada con exito!",{
          icon: "success",

        });
      }
    });
  }


  useEffect(() => {
    recibirData();

  }, [eliminarpublicacion])

  return (
    <Table striped bordered hover size="sm" responsive className='table-light'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Titulo</th>
          <th>Cuerpo</th>
          <th>Autor</th>
          <th>Imagen</th>
          <th><button className='btn btn-info text-light'>Crear Publicacion +</button></th>
        </tr>
      </thead>
      <tbody>
        {
          noticias.map(index => (

            <tr key={index._id}>
              <th>{index._id}</th>
              <th>{index.titulo}</th>
              <th>{index.descripcion}</th>
              <th>{index.autor}</th>
              <th>{index.img}</th>
              <th>
                <button className='btn btn-danger' onClick={()=> eliminarpublicacion(index._id)}>Eliminar</button>
                <button className='btn btn-success'>Editar</button>

              </th>
            </tr>
          ))
        }
     
      </tbody>
    </Table>
  );
}

export default Tablas;