import Navs from "@/components/common/Navs";
import React from "react";
import { Col, Container, Row, Card, CardGroup, Table, thead, tr, th } from "react-bootstrap";

const quienesSomos = () => {
    return (
        <>
            <Navs></Navs>
            <Container>
                <article>
                    <Row className="mt-5">
                        <Col>
                            <h1 className="text-cyan text-center">ÓRGANOS DEL GOBIERNO</h1>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col>
                            <CardGroup className="justify-content-center aling-items-center m-3">
                                <Card className="m-2 text-center">
                                    <Card.Body>
                                        <Card.Title>La asamblea</Card.Title>
                                        <hr />
                                        <Card.Text>
                                            Es la autoridad máxima de la Federación que representa a la totalidad de las entidades afiliadas.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="m-2 text-center">
                                    <Card.Body>
                                        <Card.Title>Comision Directiva</Card.Title>
                                        <hr />
                                        <Card.Text>
                                            Es el órgano ejecutivo que dirige a la Federación y está integrado por 15 directivos representantes de las provincias asociadas.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="m-2 text-center">
                                    <Card.Body>
                                        <Card.Title>La mesa chica</Card.Title>
                                        <hr />
                                        <Card.Text>
                                            Ejecuta las políticas de la Comisión Directiva y está integrada por cinco directivos.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col className="d-flex flex-column align-items-center justify-content-center">
                            <div className="d-flex">
                                <i class="bi bi-download me-2"></i>
                                <p>Acta Fundacional.</p>
                            </div>
                            <div className="d-flex ">
                                <i class="bi bi-download me-2 text-center"></i>
                                <p className="text-center p-0">Estatus y Certificado de Normal Funcionamiento.</p>
                            </div>
                        </Col>
                    </Row>
                </article>
                <article>
                    <Row>
                        <Col className="text-center mt-4">
                            <h1 className="text-cyan">PERSONERÍA JURÍDICA</h1>
                            <p className="p-5">La Personería Jurídica de la “Federación de Entidades de Discotecas de la República Argentina” FEDRA, fue otorgada por Resolución Nº 72 / 99 - DPJ, con fecha 8 de Marzo de 1.999.</p>
                        </Col>
                    </Row>
                </article>
                <section>
                    <Row>
                        <Col className="text-center mt-4">
                            <h1 className="text-cyan">AUTORIDADES</h1>
                            <p>COMISIÓN DIRECTIVA 2021 - 2023</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Cargo</th>
                                        <th>Nombre</th>
                                        <th>Provincia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>PRESIDENTE</td>
                                        <td>DI PINTO, Rodolfo</td>
                                        <td>Tucumán</td>
                                    </tr>
                                    <tr>
                                        <td>VICEPRESIDENTE 1°</td>
                                        <td>PRACILIO, Ricardo</td>
                                        <td>La Pampa</td>
                                    </tr>
                                    <tr>
                                        <td>VICEPRESIDENTE 2°</td>
                                        <td>SANDOVAL, Gabriel</td>
                                        <td>Buenos Aires (S)</td>
                                    </tr>
                                    <tr>
                                        <td>SECRETARIO</td>
                                        <td>GIORDANO, Rafael</td>
                                        <td>Córdoba</td>
                                    </tr>
                                    <tr>
                                        <td>PROSECRETARIO</td>
                                        <td>PAPASIDERO, Alejandro</td>
                                        <td>Buenos Aires (N)</td>
                                    </tr>
                                    <tr>
                                        <td>TESORERO</td>
                                        <td>CÁVOLO, Sergio</td>
                                        <td>Salta</td>
                                    </tr>
                                    <tr>
                                        <td>PROTESORERO</td>
                                        <td>MELYNSKI, Ernesto</td>
                                        <td>CABA</td>
                                    </tr>
                                    <tr>
                                        <td>VOCAL TITULAR 1°</td>
                                        <td>CONTRERAS, Eduardo</td>
                                        <td>Jujuy</td>
                                    </tr>
                                    <tr>
                                        <td>VOCAL TITULAR 2°</td>
                                        <td>OFRÍA, ROBERTO</td>
                                        <td>San Luis</td>
                                    </tr>
                                    <tr>
                                        <td>VOCAL TITULAR 3°</td>
                                        <td>CHIESA, Carlos</td>
                                        <td>Buenos Aires</td>
                                    </tr>
                                    <tr>
                                        <td>VOCAL TITULAR 4°</td>
                                        <td>PUCHETA, Francisco</td>
                                        <td>Córdoba</td>
                                    </tr>
                                    <tr>
                                        <td>VOCAL TITULAR 5°</td>
                                        <td>NEME, Elías</td>
                                        <td>Santiago</td>
                                    </tr>
                                    <tr>
                                        <td>VOCAL SUP. 1°</td>
                                        <td>MATHIS, Aníbal</td>
                                        <td>CABA</td>
                                    </tr>
                                    <tr>
                                        <td>VOCAL SUP. 2°</td>
                                        <td>BAUMGARTNER, Edgardo</td>
                                        <td>Santa Fe</td>
                                    </tr>
                                    <tr>
                                        <td>VOCAL SUP. 3°</td>
                                        <td>ENCINA, Darío</td>
                                        <td>Chaco</td>
                                    </tr>
                                    <tr>
                                        <td>REV. DE CTAS. 1°</td>
                                        <td>MOLINA, José</td>
                                        <td>Salta</td>
                                    </tr>
                                    <tr>
                                        <td>REV. DE CTAS. 2°</td>
                                        <td>FERNÁNDEZ, Adolfo</td>
                                        <td>Córdoba</td>
                                    </tr>
                                    <tr>
                                        <td>REV. DE CTAS. SUP.</td>
                                        <td>VICENTE, Edgardo</td>
                                        <td>La Pampa</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </section>
                <section>
                    <Row>
                        <Col className="text-center mt-4">
                            <h1 className="text-cyan mb-4">JUNTA ELECTORAL</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Cargo</th>
                                        <th>Nombre</th>
                                        <th>Provincia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>JUNTA ELEC. I</td>
                                        <td>FARHAT, Javier</td>
                                        <td>Tucumán</td>
                                    </tr>
                                    <tr>
                                        <td>JUNTA ELEC. II</td>
                                        <td>SPADA, Enrique</td>
                                        <td>Córdoba</td>
                                    </tr>
                                    <tr>
                                        <td>JUNTA ELEC. III</td>
                                        <td>YAZBEK, Federico</td>
                                        <td>Catamarca</td>
                                    </tr>
                                    <tr>
                                        <td>JUNTA ELEC. SUP.</td>
                                        <td>MUÑOZ, Rogelio</td>
                                        <td>San Juan</td>
                                    </tr>
                                    <tr>
                                        <td>JUNTA ELEC. SUP.</td>
                                        <td>OCHOA ALSINA, Luis Marcelo</td>
                                        <td>Chubut</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </section>
                <section>
                    <Row>
                        <Col className="text-center mt-4">
                            <h1 className="text-cyan mb-4">INTEGRANTES</h1>
                            <div>
                                <p>Cubrimos todo el país con cámaras provinciales y dos regionales; Región Patagónica (Chubut, Neuquén, Río Negro, Santa Cruz y Tierra del Fuego) y Región Litoral (Chaco, Corrientes, Formosa y Misiones).</p>
                                <div className="mapas">
                                    <img style={{ width: "300px" }} src="https://i.postimg.cc/FHHsx4Nx/REGION-LITORAL-removebg-preview.png" alt="region-litoral" />
                                    <img style={{ width: "300px" }} src="https://i.postimg.cc/BQgnD696/REGION-PATAGONICA-removebg-preview-removebg-preview.png" alt="region-patagonia" />
                                </div>
                            </div>

                        </Col>
                    </Row>
                </section>
            </Container>

        </>
    );
};

export default quienesSomos;