import React from 'react'
import '../../styles/Home.module.css'
import { Col, Container, Nav, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <footer>
      <div className='bg-darkblue py-4 text-light'>
      <Container>
        <Row>
          <Col md={4} className='d-flex flex-column align-items-center justify-content-center m-footer'>
            <img src="" alt="logo de FEDRA" />
          </Col>
          <Col md={4} className='d-flex flex-column align-items-center justify-content-center m-footer'>
            <h6>Seguinos en</h6>
            <div className='d-flex justify-content-between'>
              <Nav.Link href='#'>
                <i className="bi bi-instagram mx-2"></i>
              </Nav.Link>
              <Nav.Link href='#'>
                <i className="bi bi-twitter mx-2"></i>
              </Nav.Link>
              <Nav.Link href='#'>
                <i className="bi bi-facebook mx-2"></i>
              </Nav.Link>
            </div>
          </Col>
          <Col md={4} className='d-flex flex-column align-items-center justify-content-center'>
            <h6>Contacto</h6>
            <i className="bi bi-telephone"> 555-555 555</i>
            <i className="bi bi-envelope-at"> fedra@gmail.com</i>
          </Col>
        </Row>
      </Container>
      </div>
      <div className='d-flex justify-content-center'>
        <h6>© Desarrollado por Luno - 2023</h6>
      </div>
    </footer>
    </>
  )
}

export default Footer