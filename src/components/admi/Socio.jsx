import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Cookies from "universal-cookie";

const Socio = () => {

  const [usuarioOnline, setUsuarioOnline] = useState("");

  const history = useRouter();

  useEffect(() => {

    setUsuarioOnline(JSON.parse(localStorage.getItem('nombreUsuario')));
    const handleCookieChange = () => {
      const cookie = new Cookies();
      if (!cookie.get("token")) {
        history.push("/");

      }
    };

    handleCookieChange();

    const interval = setInterval(handleCookieChange, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => {
      clearInterval(interval);
    };

  }, [history])

  return (
    <div className='container my-3'>

      <h3 className="text-center">Usuario conectado: {usuarioOnline}</h3>
      <Row className="mt-4">
        <Col className="d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex">
            <Button className="bg-darkblue m-2" download="FEDRA-ESTATUTOS.pdf" href="FEDRA-ESTATUTOS.pdf">
              <i className="bi bi-file-earmark-arrow-down text-cyan"> Estatutos y Acta Fundacional PDF</i>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Socio