import Navs from "@/components/common/Navs";
import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";



const Contacto = () => {
    return (
        <>
            <Navs />
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
                            <Form action="https://formsubmit.co/fedraargentina@gmx.com" method="POST">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" name="nombre" placeholder="Ingrese su nombre" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control type="text" name="apellido" placeholder="Ingrese su apellido" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="correo" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Mensaje</Form.Label>
                                    <Form.Control as="textarea" name="mensaje" rows={5} placeholder="Escriba aquí su mensaje..." required />
                                </Form.Group>
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_replyto" />
                                <input type="hidden" name="_next" value="https://fedra.ar" />
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