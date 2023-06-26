import React from "react";
import "../../styles/Home.module.css";
import { Col, Container, Nav, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="position-relative bottom-0 w-100">
        <div className="bg-darkblue py-4 text-light">
          <Container>
            <Row>
              <Col
                md={4}
                className="d-flex flex-column align-items-center justify-content-center m-footer"
              >
                <img src="" alt="logo de FEDRA" />
              </Col>
              <Col
                md={4}
                className="d-flex flex-column align-items-center justify-content-center m-footer"
              >
                <h6>Seguinos en</h6>
                <div className="d-flex justify-content-between">
                  <Nav.Link href="https://www.instagram.com/fedraargentina/" target="_blank">
                    <i className="bi bi-instagram text-cyan mx-2"></i>
                  </Nav.Link>
                  <Nav.Link href="https://twitter.com/FedraArgentina" target="_blank">
                    <i className="bi bi-twitter text-cyan mx-2"></i>
                  </Nav.Link>
                  <Nav.Link href="https://www.facebook.com/profile.php?id=100093740438104&mibextid=ZbWKwL" target="_blank">
                    <i className="bi bi-facebook text-cyan mx-2"></i>
                  </Nav.Link>
                </div>
              </Col>
              <Col
                md={4}
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <h6>Contacto</h6>
                  <a href="https://wa.me/+5493816339323" target="_blank" className="d-flex text-decoration-none">
                    <i className="bi bi bi-whatsapp text-cyan me-2"></i>
                    <p>+5493816339323</p>
                  </a>
                <a href="tel:+543812326414" className="d-flex text-decoration-none">
                  <i className="bi bi-telephone text-cyan me-2"></i>
                  <p>+543812326414</p>
                </a>
                <a href="mailto:fedraArgentina@gmail.com" className="d-flex text-decoration-none">
                  <i className="bi bi-envelope-at text-cyan me-2"></i>
                  <p>fedraArgentina@gmail.com</p>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="d-flex justify-content-center">
          <h6 className="text-cyan">© Desarrollado por Luno - 2023</h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;
