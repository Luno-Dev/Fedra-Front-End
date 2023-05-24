import Navs from "@/components/common/Navs";
import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Noticias from "../components/common/Noticias"

const Inicio = () => {
  return (
    <>
      <Navs></Navs>
      <Container className="my-5">
        <article className="article-1">
          <Row className="d-xl-flex d-md-block d-sm-block justify-content-center align-items-center">
            <Col className="p-3 col-xl-6 col-12">
              <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img className="imgCarousel" src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZG8lMjBibGFuY28lMjBsaXNvfGVufDB8fDB8fHww&w=1000&q=80" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img className="imgCarousel" src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZG8lMjBibGFuY28lMjBsaXNvfGVufDB8fDB8fHww&w=1000&q=80" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img className="imgCarousel" src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZG8lMjBibGFuY28lMjBsaXNvfGVufDB8fDB8fHww&w=1000&q=80" class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </Col>
            {/* NOTICIAS */}
            <Col className="p-0 col-xl-6 col-12">
              <div className="row m-2 text-center">
                <h1 className="text-cyan">ULTIMAS NOTICIAS</h1>
              </div>


              <div className="card m-3">
                <div className="row">
                  <div className="col-xl-4 col-md-12 col-sm-12">
                    <img className="imgCard" src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZG8lMjBibGFuY28lMjBsaXNvfGVufDB8fDB8fHww&w=1000&q=80" alt="" srcset="" />
                  </div>
                  <div className="col-xl-8">
                    <div className="card-body">
                      <h5 className="card-title">Hola</h5>
                      <p className="card-text">hola, como estas</p>
                      <p className="card-text">
                        <small className="card-body-secundary">hora 5</small>
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              {/* ------- */}
              <div className="card m-3 ">
                <div className="row ">
                  <div className="col-xl-4 col-md-12 col-sm-12">
                    <img className="imgCard" src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZG8lMjBibGFuY28lMjBsaXNvfGVufDB8fDB8fHww&w=1000&q=80" alt="" srcset="" />
                  </div>
                  <div className="col-xl-8">
                    <div className="card-body">
                      <h5 className="card-title">Hola</h5>
                      <p className="card-text">hola, como estas</p>
                      <p className="card-text">
                        <small className="card-body-secundary">hora 5</small>
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              {/* -------- */}
              <div className="card m-3">
                <div className="row">
                  <div className="col-xl-4 col-md-12 col-sm-12">
                    <img className="imgCard" src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZG8lMjBibGFuY28lMjBsaXNvfGVufDB8fDB8fHww&w=1000&q=80" alt="" srcset="" />
                  </div>
                  <div className="col-xl-8">
                    <div className="card-body">
                      <h5 className="card-title">Hola</h5>
                      <p className="card-text">hola, como estas</p>
                      <p className="card-text">
                        <small className="card-body-secundary">hora 5</small>
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </Col>

            {/* FIN NOTICIAS */}
          </Row>
        </article>
        <section>
          <Row className="d-xl-flex d-md-block d-sm-block justify-content-center align-items-center mt-5">
            <Col className="p-5 col-xl-6 col-12">
              <h1 className="text-cyan">CONSTITUCIÓN</h1>
              <br />
              <p>
                FEDRA es una asociación civil empresarial Argentina sin fines de
                lucro, fundada el año 1995 con Personería Jurídica otorgada por
                la Dirección de Personas Jurídicas. Actualmente es miembro de la
                International Nightlife Association.
              </p>
            </Col>
            <Col className="p-0 col-xl-6 col-12">
              <img
                src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZG8lMjBibGFuY28lMjBsaXNvfGVufDB8fDB8fHww&w=1000&q=80"
                alt=""
                className="imgInicio"
              />
            </Col>
          </Row>
        </section>
        <section>
          <Row className="d-xl-flex d-md-block d-sm-block justify-content-center align-items-center">
            <Col className="p-0 col-xl-6 col-12">
              <img
                src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZG8lMjBibGFuY28lMjBsaXNvfGVufDB8fDB8fHww&w=1000&q=80"
                alt=""
                className="imgInicio2"
              />
            </Col>
            <Col className="p-5 col-xl-6 col-12">
              <h1 className="text-cyan">MISIÓN</h1>
              <br />
              <p>
                Nuestra principal meta es jerarquizar la actividad, para lo que desplegamos tareas en las siguientes áreas:
                <br />
                •	Representar y defender los intereses del Sector en Argentina y en los foros internacionales.
                <br />
                •	Mantener la mayor vinculación y cooperación con las entidades afiliadas, fomentando su nucleamiento y desarrollo.
                <br />
                •	Promover la capacitación profesional del sector y acompañar la creación de cursos especializados.
                <br />
                •	Propiciar espacios seguros para la diversión acorde las normas internacionales sobre seguridad e higiene, siguiendo los procedimientos del distintivo de seguridad "International Nightlife Safety Checked" de la INA.
                <br />
                •	Colaborar en la gestación de convenios laborales y legislación vinculada al sector.
                <br />
                •	Asesorar a las cámaras afiliadas en temas: institucionales, impositivos, jurídicos, técnicos y comerciales.
                <br />
                •	Integrar la actividad nocturna de Latinoamérica.

              </p>
            </Col>

          </Row>
        </section >
      </Container >
    </>
  );
};

export default Inicio;
