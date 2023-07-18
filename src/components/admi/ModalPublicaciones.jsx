import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, Modal, Spinner } from 'react-bootstrap'
import { DataContext } from '../context/DataContext';
import { createNoticia, getCategorias } from '@/helpers/fetchAdmi';
import { upload } from '@/config/firebase';
import swal from 'sweetalert';

const ModalPublicaciones = () => {

  const { show, setShow } = useContext(DataContext);
  const [categ, setCateg] = useState("");

  const [publicacion, setPublicacion] = useState({
    titulo: "",
    descripcion: "",
    autor: "",
    fecha: " ",
    imguno: "",
    subtitulouno: "",
    imgdos: "",
    subtitulodos: "",
    imgtres: "",
    subtitulotres: "",
    estado: "",

  });

  const handleClose = () => setShow(false);
  const setearImagenesUno = async (file) => {
    const url = await upload(file);
    publicacion.imguno = url
  }

  const setearImagenesDos = async (file) => {
    const url = await upload(file);
    publicacion.imgdos = url
  }

  const setearImagenesTres = async (file) => {
    const url = await upload(file);
    publicacion.imgtres = url
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    publicacion.autor = JSON.parse(localStorage.getItem('nombreUsuario'));
    setPublicacion((prevState) => ({ ...prevState, [name]: value }));
    console.log(publicacion);
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
        text: result.msg,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
    }

  }


  const traerCategorias = async () => {
    const data = await getCategorias();
    setCateg(data)
    console.log(categ);
  }

  useEffect(() => {


    traerCategorias()
  }, [])


  return (

    <>
      <Modal show={show} onHide={handleClose} animation={false}  >
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
              <Form.Label>imagen1:</Form.Label>
              <input type="file" onChange={setearImagenesUno} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Pie:</Form.Label>
              <Form.Control
                name="subtitulouno"
                type="text"
                placeholder="Ingrese un pie de imagen"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicImg">
              <Form.Label>imagen2:</Form.Label>
              <input type="file" onChange={setearImagenesDos} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Pie2:</Form.Label>
              <Form.Control
                name="subtitulodos"
                type="text"
                placeholder="Ingrese un pie de imagen"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicImg">
              <Form.Label>imagen3:</Form.Label>
              <input type="file" onChange={setearImagenesTres} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Pie:</Form.Label>
              <Form.Control
                name="subtitulotres"
                type="text"
                placeholder="Ingrese un pie de imagen"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <select id="categoria" name="categoria" onChange={handleChange} className='text-black'>
              <option className='text-black'>Seleccione una categoria:</option>

              {
                categ.length > 1 ?
                  categ.map((element) => {
                    return <option value={element._id} key={element._id} className='text-black'>{element.nombre}</option>;
                  }) : <></>
              }
            </select>
            <br />
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
            publicacion.imguno ? <Button
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