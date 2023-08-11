import { deleteNoticia, editNoticia, traerNoticias } from '@/helpers/fetchAdmi';
import { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { DataContext } from '../context/DataContext';
import ModalPublicaciones from './ModalPublicaciones';
import { Button, Form, Modal } from 'react-bootstrap';


function Tablas() {

  const [noticias, setNoticias] = useState([]);

  const { show, setShow, edit, setEdit, setEditPublicaciones, editPublicaciones } = useContext(DataContext);

  const [publicacion, setPublicacion] = useState({
    titulo: "",
    descripcion: ""
  });

  const handleShow = () => setShow(true);
  const handleEdit = (datos) => {
    setEdit(true)
    setPublicacion(datos)

  };
  const handleClose = () => setEdit(false);


  const crearNoticia = async (publicacion) => {
    const result = await editNoticia(publicacion);

    if (result.msg == "Noticia actualizada correctamente") {
      swal("Publicacion editada con Exito!", {
        icon: "success",
      });
      setEdit(false);
    } else {
      swal({
        title: "Error",
        text: "Esta noticia ya existe!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
    }

  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    publicacion.autor = JSON.parse(localStorage.getItem('nombreUsuario'));
    setPublicacion((prevState) => ({ ...prevState, [name]: value }));
  };


  const recibirData = async () => {

    const noticias = await traerNoticias();
    setNoticias(noticias.noticias);
  }


  const eliminarpublicacion = (id) => {
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
          swal("Operacion cancelada con exito!", {
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

      <ModalPublicaciones />
      <Table striped bordered hover size="sm" responsive className='table-dark '>
        <thead>
          <tr className='text-center'>
            <th className='text-cyan'>Id</th>
            <th className='text-cyan'>Titulo</th>
            <th className='text-cyan'>Cuerpo</th>
            <th className='text-cyan'>Autor</th>
            <th className='text-cyan'>Fecha de Publicacion</th>
            <th className='text-cyan'>Imagen</th>
            <th className='p-2 d-flex justify-content-center '><button className='btn bg-cyan text-light fw-bold' onClick={handleShow}>Crear Publicacion</button></th>
          </tr>
        </thead>
        <tbody >
          {
            noticias.map(index => (


              <tr key={index._id} className='fila-noticia'>
                <th>{index._id}</th>
                <th>{index.titulo}</th>
                <th className='tabla-descripcion tex-center' >{index.descripcion}</th>
                <th>{index.autor}</th>
                <th>{index.fecha.split("T", 1)}</th>
                <th className='text-center'> <img src={index.imguno} alt={index.titulo} width={80} /></th>
                <th className='d-flex flex-wrap flex-column p-2'>
                  <button className='btn btn-danger fw-bold m-2' onClick={() => eliminarpublicacion(index._id)}>Eliminar</button>
                  <button className='btn btn-success fw-bold m-2' onClick={() => handleEdit(index)} >Editar</button>

                </th>
              </tr>
            ))
          }

        </tbody>
      </Table>

      <Modal show={edit} onHide={handleClose} animation={false} >
        <Modal.Header className='bg-dark' >
          <Modal.Title>Editar Publicacion</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Titulo:</Form.Label>
              <Form.Control
                name="titulo"
                type="text"
                placeholder="Ingrese el titulo"
                onChange={handleChange}
                value={publicacion.titulo}

                required
              />
            </Form.Group>
            <Form.Label>Cuerpo:</Form.Label>
            <Form.Group className="mb-3 m-3" controlId="formBasicText">
              <textarea
                name="descripcion"
                cols="55"
                className="form-control textarea"
                id="descripcion"
                rows="4"
                placeholder="Ingrese la descripcion"
                onChange={handleChange}
                value={publicacion.descripcion}
                required
              ></textarea>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="danger" className='fw-bold' onClick={handleClose} >
            cancelar
          </Button>
            <Button
              variant="success"
              className='fw-bold'
              onClick={() => crearNoticia(publicacion)}
            >
              Editar
            </Button> 

        </Modal.Footer>
      </Modal>

    </>

  );
}

export default Tablas;