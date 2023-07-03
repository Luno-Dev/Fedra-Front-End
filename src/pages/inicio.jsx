import Navs from "@/components/common/Navs";
import { getNoticias } from "@/helpers/fetchNoticias";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import VideoYoutube from "../components/common/video";

const Inicio = () => {


  const [noticias, setNoticias] = useState([]);

  const traerData = async () => {

    let data = await getNoticias();
    setNoticias(data.noticias);


  }


  useEffect(() => {
    traerData()
  }, [])

  return (
    <>
      <Navs />
      <Container className="my-5">
        <article className="article-1">
          <Row className="d-xl-flex d-md-block d-sm-block justify-content-center align-items-center">
            <Col className="p-3 col-xl-6 col-12">
              <Carousel data-bs-ride="carousel">
                <Carousel.Item>
                  <img
                    className="imgCarousel d-block w-100"
                    src="https://i.ibb.co/gFVtkvQ/ina-face.jpg"
                    alt="Fedra congreso internacional del ocio nocturno"
                  />
                  <Carousel.Caption className="Carousel-Caption">
                    <span className="text-cyan">8° Congreso Internacional de Ocio Nocturno - International Nightlife Association (INA)</span>
                    <p>Luego de participar en la Expobar 2022, organizada por Asobares de Colombia,
                      participamos en este Congreso en Tenerife, España.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="imgCarousel d-block w-100"
                    src="https://i.ibb.co/tZ9Ljbh/Casa-Rosada-1.jpg"
                    alt="Second slide"
                  />

                  <Carousel.Caption className="Carousel-Caption">
                    <span className="text-cyan">Casa Rosada - Reunión con el Secretario de Presidencia por Seguridad en las Discotecas</span>
                    <p>Invitados por Presidencia de Argentina, asistimos a una reunión para tratar el tema
                      seguridad y violencia de género en Buenos Aires.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="imgCarousel d-block w-100"
                    src="https://i.ibb.co/x2GgM41/FEDRA-asamblea-CABA-2021.jpg"
                    alt="FEDRA reunida en Casa Rosada"
                  />

                  <Carousel.Caption className="Carousel-Caption">
                    <span className="text-cyan">Asamblea General - Federación de Entidades de Discotecas de la República Argentina</span>
                    <p>
                      Celebramos asambleas en las que se aprobaron los ejercicios vencidos y se proclamó la
                      única lista presentada ante la Junta Electoral.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            {/* NOTICIAS */}

            <Col className="noticias col-xl-6 col-md-12 col-12">

              {noticias.map(index => (


                <Col className="noticias-Card h-25" key={index._id}>
                  <div className="card">
                    <div className="row">

                      <div className="col-xl-4 col-sm-12 ">
                        <img className="imgCard fw-bold" src={index.img[0]} alt={index.titulo} />

                      </div>
                      <div className="col-xl-8 h-25 overflow-y-scroll">
                        <div className="card-body">
                          <h5 className="card-title">{index.titulo}</h5>
                          <div className="container-descripcio h-25 ">
                            <p className="card-text">{index.descripcion}</p>
                          </div>

                          <p className="card-text">
                            <small className="card-body-secundary fw-bold">Publicada: {index.fecha.split("T", 1)}</small>
                            <br />
                            <small className="card-body-secundary fw-bold">Autor: {index.autor}</small>
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </Col>


              ))

              } <div className="row m-3 text-center">
                <h1 className="text-cyan">ULTIMAS NOTICIAS</h1>
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
                src="/constitucion.png"
                alt="constitucion Fedra"
                width={100}
                className="imgInicio"
                height={100}
              />
            </Col>
          </Row>
        </section>
        <section>
          <Row className="d-xl-flex d-md-block d-sm-block justify-content-center align-items-center">
            <Col className="p-0 col-xl-6 col-12">
              <img
                src="/mision.png"
                alt="mision fedra"
                className="imgInicio2"
                width={100}
                height={100}
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
        <article className="agregados">
          <Row className="d-xl-flex d-md-block d-sm-block mt-3 text-center">
            <Col className="p-5 col-xl-6 col-12 capacita1">
              <h1 className="text-cyan">REGISTRÁ TU PERSONAL</h1>
              <br />
              <p>
                Celebramos dos convenios colectivos de trabajo con SUTEP y SUTCAPRA, homologados por el Ministerio de Trabajo de la Nación, donde podés registrar a todo tu personal con importantes beneficions de aportes y obra social.
              </p>
            </Col>
            <Col className="p-5 col-xl-6 col-12 capacita2">
              <h1 className="text-cyan">CAPACITÁ TU PERSONAL</h1>
              <br />
              <p>
                Suscribimos un convenio con la Universidad Tecnologica Nacional y la asociación de Bartenders de Argentina, creando una carrera universitaria para capacitar a nuestro personal en diferentes funciones.
              </p>
            </Col>
          </Row>
          <Col className="p-5 col-xl-12 col-12 text-center">
            <h1 className="text-cyan">CONSULTORA</h1>
            <br />
            <p>

              FEDRA puede asesorar en cuestiones sobre las que posee un conocimiento especializado y
              ayudar a las empresas a mejorar su desempeño. Ofrecemos contactos en todos los
              ámbitos institucionales; privados, públicos o mixtos.
            </p>
          </Col>
        </article>
        <article>
          <Row className="text-center p-4">
            <Col>
              <VideoYoutube
                width={50}
              />
            </Col>
          </Row>
        </article>
      </Container >
    </>
  )
};

export default Inicio;