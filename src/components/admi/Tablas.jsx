import { deleteNoticia, traerNoticias } from '@/helpers/fetchAdmi';
import { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { DataContext } from '../context/DataContext';
import ModalPublicaciones from './ModalPublicaciones';


function Tablas() {

  const [noticias, setNoticias] = useState([]);

  const {show, setShow}= useContext(DataContext);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const recibirData = async () => {

    const noticias = await traerNoticias();
    setNoticias(noticias.noticias);
  }


  const eliminarpublicacion= (id)=>{
    swal({
      title: "Esta seguro?",
      text: "Esta accion es inrreversible!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Publicacion eliminada con Exito!", {
          icon: "success",
        });
        deleteNoticia(id);
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
    <>
    
    <ModalPublicaciones/>
    <Table striped bordered hover size="sm" responsive className='table-dark '>
      <thead>
        <tr>
          <th>Id</th>
          <th>Titulo</th>
          <th>Cuerpo</th>
          <th>Autor</th>
          <th>Fecha de Publicacion</th>
          <th>Imagen</th>
          <th className='p-3 d-flex justify-content-center'><button className='btn bg-cyan text-light fw-bold' onClick={handleShow}>Crear Publicacion</button></th>
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
              <th>{index.fecha.split("T",1)}</th>
              <th className='text-center'> <img src={index.img} alt="" width={80}/></th>
              <th className='d-flex flex-wrap flex-column p-2'>
                <button className='btn btn-danger fw-bold m-2' onClick={()=> eliminarpublicacion(index._id)}>Eliminar</button>
                <button className='btn btn-success fw-bold m-2' onClick={handleShow}>Editar</button>

              </th>
            </tr>
          ))
        }
     
      </tbody>
    </Table>
    
    
    
    </>
    
  );
}

export default Tablas;