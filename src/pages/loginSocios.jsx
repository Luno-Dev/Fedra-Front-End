import Navs from "@/components/common/Navs";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { loginSocios } from "../helpers/fetchAuth";
import swal from "sweetalert";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";

const logins = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = await loginSocios({  email, password });

    if (datos?.token) {
      console.log(datos);
      localStorage.setItem("token", JSON.stringify(datos.token));
      localStorage.setItem("nombreUsuario", JSON.stringify(datos.socio.trabajadornombre));
      localStorage.setItem("role", JSON.stringify(datos.socio.role));


      swal(
        `Bienvenido ${datos.socio.trabajadornombre}!`,
        "Haz Clik para continuar!",
        "success"
      ).then((active) => {
        if (active) {
          location.replace("/administracion");
        }
      });
    } else {
      if (datos?.errors) {
        setMessage(datos.errors);
      } else {
        setMessage([{ msg: datos.msg }]);
      }
    }
  };

  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ingreso Socios</title>
        </Helmet>
      </div>

      <Navs />
      <Container>

      
      <h1 className="text-center text-cyan mt-5">Ingreso de Socios</h1>
      <section className="d-flex justify-content-center">
        <Form className="my-5 form--ingreso" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Correo:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus={true}
              required
              placeholder="nombre@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              required
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="ingrese su contraseña..."
            />
          </Form.Group>

          {message.length > 0 &&
            message.map((item, index) => (
              <div
                key={index}
                className="login__alertas   alert alert-danger "
                role="alert"
              >
                {item.msg}
              </div>
            ))}
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn bg-cyan">
              Ingresar
            </button>
          </div>
        </Form>
      </section>
      </Container>
    </>
  );
};

export default logins;
