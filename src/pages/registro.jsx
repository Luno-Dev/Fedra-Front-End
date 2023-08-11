import Navs from "@/components/common/Navs";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { crearUsuario } from "../helpers/fetchUsuarios";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "react-bootstrap";
import swal from "sweetalert";

const registro = () => {
  const [formValues, setFormValues] = useState({
    empleadorcuil: "",
    empleadorrazonsocial: "",
    empleadordomicilio: "",
    empleadorprovincia: "",
    empleadortrabajodomicilio: "",
    empleadorlocalidad: "",
    empleadortrabajoprovincia: "",
    empleadortrabajolocalidad: "",
    empleadoractividad: "",
    convenio: "",
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

      if (respuesta === "Socio creado con exito!") {
         swal(
        respuesta,
        {icon: "success"},
      ).then((active) => {
        if (active) {
         location.replace("/loginSocios"); 
        }
      });
      } else {
        swal(
          respuesta,
          {icon: "warning"},
        )
      }

      setFormValues({
        empleadorcuil: "",
        empleadorrazonsocial: "",
        empleadordomicilio: "",
        empleadorprovincia: "",
        empleadortrabajodomicilio: "",
        empleadorlocalidad: "",
        empleadortrabajoprovincia: "",
        empleadortrabajolocalidad: "",
        empleadoractividad: "",
        email: "",
        password: "",
        role: "SOCIO_ROLE",
        img: "",
      });
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
          <Form onSubmit={guardarDatos}>
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
                      placeholder="20-00000000-0"
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
                      placeholder="Establecimiento S.R.L"
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
                      placeholder="Juan B Justo, 3000"
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
                      placeholder="Yerbaa Buena..."
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
                      placeholder="Provincia del dueño"
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
                      placeholder="calle mitre 123"
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
                      placeholder="Localidad"
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
                      placeholder="Provincia"
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
                      placeholder="Nos dedicamos a...."
                    />
                  </div>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-2">
                  <div className="d-flex flex-column">
                    <Form.Label>Convenio:</Form.Label>
                    <select id="convenio" name="convenio" onChange={handleChange} className='text-black'>
                      <option className='text-black'>Seleccione el convenio:</option>
                      <option value="SUTCAPRA" className='text-black'>SUTCAPRA</option>
                      <option value="SUTEP" className='text-black'>SUTEP</option>
                    </select>
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
                      placeholder="ejemplo@email.com"
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
