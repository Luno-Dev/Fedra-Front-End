import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const constitucion = () => {
  return (
    <>
      <Container className="my-5">
        <section className=" my-5 d-flex flex-column align-items-center">
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

        </section>
      </Container>
    </>
  );
};

export default constitucion;
