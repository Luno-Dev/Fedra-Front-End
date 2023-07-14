import Navs from "@/components/common/Navs";
import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";



const Contacto = () => {
    return (
        <>
            <Navs/>
            <Container>
                <div>
                    <h1 className="text-cyan text-center mt-4">CONTÁCTANOS</h1>
                </div>
                <div>
                    <Row>
                        <Col lg="6" className="Datos mt-5">
                            <div className="d-flex">
                                <i className="bi bi-geo-alt me-3 text-cyan"></i>
                                <p>San Martín N°16 - PB - San Miguel de Tucumán - CP. 4000 - República Argentina.</p>
                            </div>
                            <div className="d-flex">
                                <i className="bi bi-envelope-at me-3 text-cyan"></i>

                                <p>FedraArgentina@gmx.com</p>

                            </div>
                            <div className="d-flex">
                                <i className="bi bi-telephone me-3 text-cyan"></i>
                                <p>+543812326414</p>
                            </div>
                            <div className="d-flex">
                                <i className="bi bi-whatsapp me-3 text-cyan"></i>
                                <p>+5493816339323</p>
                            </div>
                        </Col>

                    </Row>
                </div>
                <div>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col lg="6" className="Mapa mt-5 mb-5">
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="name" placeholder="Ingrese su nombre" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control type="name" placeholder="Ingrese su apellido" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Mensaje</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Escriba aquí su mensaje..." />
                                </Form.Group>
                                <Button className="" variant="primary" type="submit">
                                    Enviar
                                </Button>
                            </Form>
                        </Col>
                    </Row>

                </div>

            </Container>
        </>
    )


};

export default Contacto;