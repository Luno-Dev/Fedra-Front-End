import React, { useContext, useState } from 'react'
import { Button, Form, Modal, Spinner } from 'react-bootstrap'
import { DataContext } from '../context/DataContext';
import { createNoticia } from '@/helpers/fetchAdmi';
import { upload } from '@/config/firebase';
import swal from 'sweetalert';

const ModalPublicaciones = () => {

  const { show, setShow } = useContext(DataContext);

  const [publicacion, setPublicacion] = useState({
    titulo: "",
    descripcion: "",
    autor: "",
    fecha: "",
    img: [],
    estado: "",

  });

  const handleClose = () => setShow(false);
const setearImagenes = async (file,index)=>{
   const url = await upload(file);   
publicacion.img[index]=url
}
  const handleimg = async (e) => {
    let long =e.target.files.length
for (let index = 0; index< long ; index++) {
 setearImagenes(e.target.files[index], index);

    
    }}

  const handleChange = (e) => {
    const { name, value } = e.target;
    publicacion.autor = JSON.parse(localStorage.getItem('nombreUsuario'));
    setPublicacion((prevState) => ({ ...prevState, [name]: value }));
 
  };


  const crearNoticia = async (publicacion) => {
    const result = await createNoticia(publicacion);

    if (result.msg === "Se creo una nueva noticia") {
      swal("Publicacion creada con Exito!", {
        icon: "success",
      });
      setShow(false);
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



  return (

    <>
      <Modal show={show} onHide={handleClose} animation={false} >
        <Modal.Header className='bg-dark' >
          <Modal.Title>Crear Publicacion</Modal.Title>
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
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicImg">
              <Form.Label>imagen:</Form.Label>
              <input type="file" multiple onChange={handleimg}  />
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
                required
              ></textarea>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="danger" className='fw-bold' onClick={handleClose} >
            cancelar
          </Button>
          {
            publicacion.img ? <Button
              variant="success"
              className='fw-bold'
              onClick={() => crearNoticia(publicacion)}
            >
              Crear
            </Button> :
              <Spinner animation="border" />
          }

        </Modal.Footer>
      </Modal>

    </>
  )
}

export default ModalPublicaciones