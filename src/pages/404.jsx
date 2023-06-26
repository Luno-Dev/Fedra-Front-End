import Navs from "@/components/common/Navs";
import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

const error = () => {
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          {/*     <link rel="shortcut icon" href={favicon} type="image/x-icon" /> */}
          <title>Error 404 - Pagina no Encontrada</title>
        </Helmet>
      </div>

      <Navs />
      <Container>
        <div className="p-5 d-flex flex-column justify-content-center align-items-center gap-3">
          <div className="image--error position-relative">
          <Image
          src="/error404.png"
          fill
          priority={true}
          alt="Image de error 404"
          ></Image>
          </div>
          <h1 className="text-center display-3 text-light ">
            Pagina no encontrada
          </h1>
          <button
            className="btn bg-cyan align-self-center"
            onClick={() => location.replace("/")}
          >
            Volver a inicio
          </button>
        </div>
      </Container>
    </>
  );
};

export default error;
