import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const constitucion = () => {
  return (
    <>
      <Container className="my-5">
        <section className="my-5 d-flex flex-column align-items-center">
          <h1 className="text-cyan">CONSTITUCIÓN</h1>
          <img
            src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="imagen de prueba"
            className="imgBanner w-100 rounded my-3"
            />
          <h2>Objetivos</h2>
          <p className="text-center">
            FEDRA surgió debido a la necesidad de vincular a los propietarios de
            discotecas de todo el país con el objetivo fundamental de unir,
            jerarquizar y defender la vida nocturna. Durante la “Electroshow
            ‘95” en CABA, se convino efectuar una reunión previa en la ciudad de
            Villa Carlos Paz, Córdoba; donde se sentaron las bases para la
            Asamblea Constitutiva que se realizó en San Miguel de Tucumán el 29
            de Noviembre de ese mismo año. <br></br> El objetivo fundamental era
            la formación de cámaras de discotecas en todo el país y la Comisión
            Directiva viajó por Argentina fomentando la creación de las nuevas
            instituciones del sector del entretenimiento. Logramos un
            intercambio de información permanente y a la vez; brindamos un
            servicio de asesoramiento que los hizo sentir seguros y defendidos
            ante los diversos problemas impositivos y arancelarios que los
            apremiaban.
          </p>
        </section>
        <section>
        <h2 className="text-cyan">Funciones</h2>
          <hr />
          <Row className="p-2">
            <Col sm="12" md="5" lg="4">
              <p className="pos-sticky">
                Las funciones de FEDRA están establecidas en el punto tercero de
                su Acta Constitutiva y son las siguientes:
              </p>
            </Col>
            <Col sm="12" md="7" lg="8">
              <Row>
                <Col sm="1">
                  <p><strong className="text-cyan">01</strong></p>
                </Col>
                <Col sm="11">
                  <p>Nuclear a todas las entidades empresarias asociadas, colaborando con el desarrollo de la actividad turística a la par de la labor hotelera, gastronómica, transportistas, agentes de viajes, aerotransportadoras, productivas, comerciales, artesanales, culturales y financieras en su más amplio sentido.</p>
                </Col>
                <hr />
                <Col sm="1">
                  <p><strong className="text-cyan">02</strong></p>
                </Col>
                <Col sm="11">
                  <p>Representar ante los organismos competentes, Oficiales, Privados o Mixtos los intereses de la actividad como así también los de sus asociados.</p>
                </Col>
                <hr />
                <Col sm="1">
                  <p><strong className="text-cyan">03</strong></p>
                </Col>
                <Col sm="11">
                  <p>Adherir y/o asociarse a Entidades Empresarias que persigan fines similares a los de esta Federación, sin perder la autonomía.</p>
                </Col>
                <hr />
                <Col sm="1">
                  <p><strong className="text-cyan">04</strong></p>
                </Col>
                <Col sm="11">
                  <p>Fomentar la promoción de las regiones y destinos turísticos de nuestro país, dentro y fuera del mismo.</p>
                </Col>
                <hr />
                <Col sm="1">
                  <p><strong className="text-cyan">05</strong></p>
                </Col>
                <Col sm="11">
                  <p>Propender a la participación en las Actividades Empresarias que se relacionen y contribuyan al quehacer turístico.</p>
                </Col>
                <hr />
                <Col sm="1">
                  <p><strong className="text-cyan">06</strong></p>
                </Col>
                <Col sm="11">
                  <p>Estimular la creación de nuevas Cámaras de Empresarios de Discotecas; municipales, provinciales o regionales, donde no exista otra ya federada.</p>
                </Col>
                <hr />
                <Col sm="1">
                  <p><strong className="text-cyan">07</strong></p>
                </Col>
                <Col sm="11">
                  <p>Contribuir al más amplio desarrollo de las actividades que llevan a cabo sus asociados.</p>
                </Col>
                <hr />
                <Col sm="1">
                  <p><strong className="text-cyan">08</strong></p>
                </Col>
                <Col sm="11">
                  <p>Representar a las entidades asociadas ante terceros en cuestiones de carácter general y actuar en nombre de las mismas en todo tipo de convenciones.</p>
                </Col>
                <hr />
                <Col sm="1">
                  <p><strong className="text-cyan">09</strong></p>
                </Col>
                <Col sm="11">
                  <p>Intervenir, a petición de los interesados, en los conflictos y controversias que pudieran suscitarse.</p>
                </Col>
                <hr />
                <Col sm="1">
                  <p><strong className="text-cyan">10</strong></p>
                </Col>
                <Col sm="11">
                  <p>Defender los legítimos intereses de quienes se dedican a la actividad representada.</p>
                </Col>
                <hr />
              </Row>
            </Col>
          </Row>
        </section>
        <section className="my-5 d-flex flex-column align-items-center">
          <h2>Posicionamiento</h2>
          <p className="text-center">Nos vinculamos con la Fédération Européenne de Discothèques et de Dancings y conformamos la Confederación Latinoamericana de Empresas de Entretenimiento, lo que nos permite actualmente, trabajar en conjunto con ASOBARES de Colombia y afiliarnos a la International Nightlife Association.</p>
        </section>
      </Container>
    </>
  );
};

export default constitucion;
