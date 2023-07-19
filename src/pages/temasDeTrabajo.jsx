import Navs from "@/components/common/Navs";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

const TemasDeTrabajo = () => {
  return (
    <>
      <Navs />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Temas de Trabajo</title>
      </Helmet>
      <Container className="my-5">
        <section className="mb-5">
          <h1 className="text-cyan text-center mb-4">CONVENIOS COLECTIVOS DE TRABAJO</h1>
          <p className="text-center">
            Tenemos dos CCT homologados ante el Ministerio de Trabajo, Empleo
            y Seguridad Social de la Nación; uno con el Sindicato Único de
            Trabajadores de Control de Admisión y Permanencia de la República
            Argentina SUTCAPRA y otro celebrado con el Sindicato Único de
            Trabajadores de Espectáculos Públicos SUTEP.
          </p>
          <article className="mt-5 d-flex justify-content-around flex-wrap gap-2">
            <Button className="bg-darkblue" download="convenio-SUTCAPRA.pdf" href="https://drive.google.com/uc?id=1ENj27tfnhmhUDrS89bGr-MZG-_SqpFqh&export=download">
              <i className="bi bi-file-earmark-arrow-down text-cyan">Convenio SUTCAPRA</i>
            </Button>
            <Button className="bg-darkblue" download="convenio-SUTEP.pdf" href="https://drive.google.com/uc?id=1L2rbjk83h3h8PBhSJDlT2C_uHMj4sxPb&export=download">
              <i className="bi bi-file-earmark-arrow-down text-cyan">Convenio SUTEP</i>
            </Button>
          </article>
        </section>
        <section className="mb-5">
          <h2 className="text-cyan text-center mb-4">IMPUESTOS Y ARANCELES</h2>
          <p className="text-center">Es el rubro más cargado impositivamente, con tasas diferenciales en todos los ámbitos: AFIP 21%, SADAIC 16 %, AADI-CAPIF 8 %, otras entidades autorales 6 % e instituciones contra el alcoholismo 4 %, entre otras. Rentas Provinciales 15 % y Rentas Municipales 8 % son valores promedio en el país.</p>
        </section>
        <section className="mb-5">
          <h2 className="text-cyan text-center mb-4">NORMATIVAS</h2>
          <p className="text-center">Se pone a disposición un espacio abierto con las leyes, decretos y ordenanzas para nuestra actividad. Solicitarlas al mail:
            fedraargentina@gmx.com</p>
        </section>
      </Container>
    </>
  );
};

export default TemasDeTrabajo;
