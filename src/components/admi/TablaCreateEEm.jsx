import { postEmpleados } from '@/helpers/fechSociosAdmi';
import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import swal from 'sweetalert';


const TablaCreateEEm = () => {

  const [empleado, setEmpleado] = useState([{}]);



  const crearEmpleado = async () => {

    if (empleado.trabajadorcuil) {
       if (empleado.trabajadorsueldo) {

      if (empleado.trabajadornombre) {

        const response = await postEmpleados(empleado);

        if (response === "Empleado creado con exito!") {
          swal(response, { icon: "success", });


         location.reload(); 

        } else {
          swal(response, { icon: "warning", });

        };
      } else {
        swal("El Nombre NO puede estar vacio!", {
          icon: "warning",
  
        });
      }

    } else {
      swal("El Sueldo NO puede estar vacio!", {
        icon: "warning",

      });
    }
    } else {
      swal("El CUIL NO puede estar vacio!", {
        icon: "warning",

      });
    }
   



  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpleado((prevState) => ({ ...prevState, [name]: value }));

  };

  return (
    <>


      <div className='mt-5'>
        <h1 className="text-center text-cyan mt-2 mb-2">Agregar Empleados</h1>

        <div className="my-5">
          <Form>
            <Form.Group
              className="mb-3 d-flex flex-wrap gap-5"
            >
              <Row>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadornombre"
                      onChange={handleChange}
                      aria-describedby="trabajadornombre"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadorapellido"
                      onChange={handleChange}
                      aria-describedby="trabajadorapellido"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Nacionalidad:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadornacionalidad"
                      onChange={handleChange}
                      aria-describedby="trabajadornacionalidad"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Estado Civil:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadorestadocivil"
                      onChange={handleChange}
                      aria-describedby="trabajadorestadocivil"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Sexo:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadorsexo"
                      onChange={handleChange}
                      aria-describedby="trabajadorsexo"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Fecha de Naciminiento:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadornacimiento"
                      onChange={handleChange}
                      aria-describedby="trabajadornacimiento"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>DNI:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadordocumento"
                      onChange={handleChange}
                      aria-describedby="trabajadordocumento"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>CUIL:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadorcuil"
                      onChange={handleChange}
                      aria-describedby="trabajadorcuil"
                      required
                      minLength={11}
                      maxLength={11}
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Domicilio:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadordomicilio"
                      onChange={handleChange}
                      required
                      aria-describedby="trabajadordomicilio"
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Piso:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadorpiso"
                      onChange={handleChange}
                      required
                      aria-describedby="trabajadorpiso"
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Depto:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadordepto"
                      onChange={handleChange}
                      required
                      aria-describedby="trabajadordepto"
                      minLength={6}
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Localidad:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadorlocalidad"
                      onChange={handleChange}
                      aria-describedby="trabajadorlocalidad"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Provincia:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadorprovincia"
                      onChange={handleChange}
                      aria-describedby="trabajadorprovincia"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Lugar de Trabajo:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadorlugardetrabajo"
                      onChange={handleChange}
                      aria-describedby="trabajadorlugardetrabajo"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Tareas que realiza:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadortareas"
                      onChange={handleChange}
                      required
                      aria-describedby="trabajadortareas"
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Telefono:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadortel"
                      onChange={handleChange}
                      required
                      aria-describedby="trabajadortel"
                      minLength={6}
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Celular:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadorcel"
                      onChange={handleChange}
                      aria-describedby="trabajadorcel"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Periodo que Abona:</Form.Label>
                    <Form.Control
                      type="text"
                      name="fechaAporte"
                      onChange={handleChange}
                      aria-describedby="fechaAporte"
                      required
                    />
                  </div>
                </Col>

                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">

                    <Form.Label>Sueldo:</Form.Label>
                    <Form.Control
                      type="number"
                      name="trabajadorsueldo"
                      onChange={handleChange}
                      aria-describedby="trabajadorsueldo"
                      required
                    />
                  </div>
                </Col>
              </Row>
            </Form.Group>

          </Form>     <div className="d-flex justify-content-end">
            <button onClick={crearEmpleado} className="btn btn-success text-light fw-bolder">Cargar</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default TablaCreateEEm