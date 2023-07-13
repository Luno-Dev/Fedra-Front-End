import Navs from "@/components/common/Navs";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { crearUsuario } from "../helpers/fetchUsuarios";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "react-bootstrap";
import swal from "sweetalert";

const registro = () => {
  const [formValues, setFormValues] = useState({
    trabajadornombre: "",
    trabajadorapellido: "",
    trabajadornacionalidad: "",
    trabajadorestadocivil: "",
    trabajadorsexo: "",
    trabajadornacimiento: "",
    trabajadordocumento: "",
    trabajadorcuil: "",
    trabajadordomicilio: "",
    trabajadornumdomicilio: "",
    trabajadorpiso: "",
    trabajadordepto: "",
    trabajadorlocalidad: "",
    trabajadorprovincia: "",
    trabajadorlugardetrabajo: "",
    trabajadortareas: "",
    trabajadortel: "",
    trabajadorcel: "",
    empleadorrazonsocial: "",
    empleadordomicilio: "",
    empleadorprovincia: "",
    empleadortrabajodomicilio: "",
    empleadortrabajolocalidad: "",
    empleadortrabajoprovincia: "",
    empleadortrabajolocalidad: "",
    empleadoractividad: "",
    email: "",
    password: "",
    role: "SOCIO_ROLE",
    img: "",
  });

  const [message, setMessage] = useState([]);

  const handleChange = ({ target }) => {
    let name = target.name;
    let value = target.value;

    setFormValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const guardarDatos = async (e) => {
    e.preventDefault();
    if (formValues.password) {
      const respuesta = await crearUsuario(formValues);
      swal(
        `Datos Recibidos con exito!`,
        "Para completar el registro debera abonar la cuota de afiliacion a este CBU: 0110481720048102102848 e informar el pago al correo: FedraArgentina@gmx.com ",
        "success"
      ).then((active) => {
        if (active) {
          location.replace("/");
        }
      });
      if (respuesta?.usuario) {
        setMessage([{ ok: true, msg: respuesta.msg }]);
        setTimeout(() => {
          setMessage([]);
        }, 3000);
      } else {
        if (respuesta?.errors) {
          setMessage(respuesta.errors);
        } else {
          setMessage([{ msg: respuesta.msg }]);
        }
      }

      setFormValues({
        trabajadornombre: "",
        trabajadorapellido: "",
        trabajadornacionalidad: "",
        trabajadorestadocivil: "",
        trabajadorsexo: "",
        trabajadornacimiento: "",
        trabajadordocumento: "",
        trabajadorcuil: "",
        trabajadordomicilio: "",
        trabajadornumdomicilio: "",
        trabajadorpiso: "",
        trabajadordepto: "",
        trabajadorlocalidad: "",
        trabajadorprovincia: "",
        trabajadorlugardetrabajo: "",
        trabajadortareas: "",
        trabajadortel: "",
        trabajadorcel: "",
        empleadorcuil: "",
        empleadorrazonsocial: "",
        empleadordomicilio: "",
        empleadorprovincia: "",
        empleadortrabajodomicilio: "",
        empleadortrabajolocalidad: "",
        empleadortrabajoprovincia: "",
        empleadortrabajolocalidad: "",
        empleadoractividad: "",
        email: "",
        password: "",
        role: "SOCIO_ROLE",
        img: "",
      });
    } else {
      inputRef.current.setCustomValidity("Las contraseñas deben coincidir");
    }
  };

  return (
    <>
      <Navs />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Registro de Personal</title>
      </Helmet>
      <Container>
        <h1 className="text-center text-cyan my-5">REGISTRO DE PERSONAL</h1>
        <div className="my-5">
          <h2 className="text-cyan">Trabajador</h2>
          <Form onSubmit={guardarDatos}>
            <Form.Group
              className="mb-3 d-flex flex-wrap gap-5"
              controlId="formBasicEmail"
            >
              <Row>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadornombre"
                      aria-describedby="trabajadornombre"
                      onChange={handleChange}
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
                      aria-describedby="apellido"
                      onChange={handleChange}
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
                      aria-describedby="trabajadornacionalidad"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>{" "}
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Estado Civil:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadorestadocivil"
                      onChange={handleChange}
                      aria-describedby="estadoCivil"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadorsexo"
                      onChange={handleChange}
                      aria-describedby="sexo"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Fecha de Nacimiento:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadornacimiento"
                      onChange={handleChange}
                      aria-describedby="fechaNacimiento"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>D.N.I</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadordocumento"
                      onChange={handleChange}
                      aria-describedby="DNI"
                      maxLength={8}
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
                      aria-describedby="cuil"
                      maxLength={12}
                      required
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
                      aria-describedby="domicilio"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Numero de Domicilio:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadornumdomicilio"
                      onChange={handleChange}
                      aria-describedby="numDomicilio"
                      required
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
                      aria-describedby="piso"
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Numero de Departamento:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadordepto"
                      onChange={handleChange}
                      aria-describedby="depto"
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
                      aria-describedby="localidad"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Povincia:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadorprovincia"
                      onChange={handleChange}
                      aria-describedby="povincia"
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
                      aria-describedby="trabajo"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Tareas que Realiza:</Form.Label>
                    <Form.Control
                      type="text"
                      name="trabajadortareas"
                      onChange={handleChange}
                      aria-describedby="tareas"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Telefono Fijo:</Form.Label>
                    <Form.Control
                      type="telFijo"
                      name="trabajadortel"
                      onChange={handleChange}
                      aria-describedby="telFijo"
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Celular:</Form.Label>
                    <Form.Control
                      type="tel"
                      name="trabajadorcel"
                      onChange={handleChange}
                      aria-describedby="celular"
                      required
                    />
                  </div>
                </Col>
              </Row>
            </Form.Group>

            <h2 className="text-cyan">Empleador</h2>
            <Form.Group
              className="mb-3 d-flex flex-wrap gap-5"
              controlId="formBasicEmail"
            >
              <Row>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>CUIL:</Form.Label>
                    <Form.Control
                      type="text"
                      name="empleadorcuil"
                      onChange={handleChange}
                      aria-describedby="empleadorcuil"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Razon Social:</Form.Label>
                    <Form.Control
                      type="text"
                      name="empleadorrazonsocial"
                      onChange={handleChange}
                      aria-describedby="razonSocial"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Domicilio Legal:</Form.Label>
                    <Form.Control
                      type="text"
                      name="empleadordomicilio"
                      onChange={handleChange}
                      aria-describedby="domicilioLegal"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Localidad:</Form.Label>
                    <Form.Control
                      type="text"
                      name="empleadorlocalidad"
                      onChange={handleChange}
                      aria-describedby="empleadorlocalidad"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Povincia:</Form.Label>
                    <Form.Control
                      type="text"
                      name="empleadorprovincia"
                      onChange={handleChange}
                      aria-describedby="empleadorprovincia"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Domicilio del Lugar de Trabajo:</Form.Label>
                    <Form.Control
                      type="text"
                      name="empleadortrabajodomicilio"
                      onChange={handleChange}
                      aria-describedby="empleadortrabajodomicilio"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Localidad del Lugar de Trabajo:</Form.Label>
                    <Form.Control
                      type="text"
                      name="empleadortrabajolocalidad"
                      onChange={handleChange}
                      aria-describedby="empleadortrabajolocalidad"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Povincia del Lugar de Trabajo:</Form.Label>
                    <Form.Control
                      type="text"
                      name="empleadortrabajoprovincia"
                      onChange={handleChange}
                      aria-describedby="empleadortrabajoprovincia"
                      required
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Actividad del Empleador:</Form.Label>
                    <Form.Control
                      type="text"
                      name="empleadoractividad"
                      onChange={handleChange}
                      required
                      aria-describedby="empleadoractividad"
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      onChange={handleChange}
                      required
                      aria-describedby="email"
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={handleChange}
                      required
                      aria-describedby="password"
                      minLength={6}
                    />
                  </div>
                </Col>
              </Row>
            </Form.Group>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn bg-cyan text-light fw-bolder">Registrarse</button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default registro;
