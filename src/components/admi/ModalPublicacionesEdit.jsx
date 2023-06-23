import React, { useContext, useState } from 'react'
import { Button, Form, Modal, Spinner } from 'react-bootstrap'
import { DataContext } from '../context/DataContext';
/* import { upload } from '@/config/firebase'; */
import { createNoticia } from '@/helpers/fetchAdmi';

const ModalPublicacionesdit = () => {

  const {show, setShow}= useContext(DataContext);
  const [publicacion, setPublicacion]= useState({
    titulo:"",
    descripcion:"",
    autor:"v",
    fecha:"",
    img:" v",
    estado:"",

  });
  
  const handleClose = () => setShow(false);
/* 
  const handleimg = async (e) => {
    const url = await upload(e.target.files[0]);
    publicacion.img = url;
  }; */

  const handleChange = (e) => {  
    console.log(publicacion);
    const { name, value } = e.target;
   publicacion.autor= JSON.parse(localStorage.getItem('nombreUsuario'));
    setPublicacion((prevState) => ({ ...prevState, [name]: value }));
  };



  return (

    <>
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Publicacion:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              <input type="file" name="file" /* onChange={handleimg}  *//>
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
        <Modal.Footer>
          <Button variant="danger" onClick={()=>handleClose} >
            cancelar
          </Button>
            {
            publicacion.img ? <Button
              variant="success"
              onClick={() => createNoticia(publicacion)}
            >
              Crear
            </Button> :
              <Spinner animation="border" />
          }

          <button   onClick={() => createNoticia(publicacion)}>ok</button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default ModalPublicacionesdit