import Navs from "@/components/common/Navs";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Inicio = () => {
  return (
    <>
      <Navs></Navs>
      <Container className="my-5">
        <section>
          <Row className="d-xl-flex d-md-block d-sm-block justify-content-center align-items-center">
            <Col className="p-5 col-xl-6 col-12">
              <h1 className="text-cyan">CONSTITUCION</h1>
              <br />
              <p>
                FEDRA es una asociación civil empresarial Argentina sin fines de
                lucro, fundada el año 1995 con Personería Jurídica otorgada por
                la Dirección de Personas Jurídicas. Actualmente es miembro de la
                International Nightlife Association.
              </p>
            </Col>
            <Col className="p-5 col-xl-6 col-12">
              <img
                src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZG8lMjBibGFuY28lMjBsaXNvfGVufDB8fDB8fHww&w=1000&q=80"
                alt=""
                className="imgInicio"
              />
            </Col>
          </Row>
        </section>
        <article>
          <Row className="d-xl-flex d-md-block d-sm-block justify-content-center align-items-center">
            <Col className="p-5 col-xl-6 col-12">
              <h1 className="text-cyan">CONSTITUCION</h1>
              <br />
              <p>
                FEDRA es una asociación civil empresarial Argentina sin fines de
                lucro, fundada el año 1995 con Personería Jurídica otorgada por
                la Dirección de Personas Jurídicas. Actualmente es miembro de la
                International Nightlife Association.
              </p>
            </Col>
            <Col className="p-5 col-xl-6 col-12">
              <img
                src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZG8lMjBibGFuY28lMjBsaXNvfGVufDB8fDB8fHww&w=1000&q=80"
                alt=""
                className="imgInicio"
              />
            </Col>
          </Row>
        </article>
      </Container>
    </>
  );
};

export default Inicio;
