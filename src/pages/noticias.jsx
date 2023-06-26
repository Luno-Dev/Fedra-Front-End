import Navs from "@/components/common/Navs";
import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

const noticias = () => {
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          {/*     <link rel="shortcut icon" href={favicon} type="image/x-icon" /> */}
          <title>Noticias</title>
        </Helmet>
      </div>

      <Navs />
      <Container>
        <h1 className="text-center text-cyan my-5">Noticias</h1>
        <div className="not-cont">
          <div className="noticias-card">
            <div className="card-img-noticia">
              <img
                src="https://images.pexels.com/photos/4003171/pexels-photo-4003171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="img"
              />
            </div>
            <div className="card-body-noticia">
              <h3 className="noticias-titulo">paisajes lindos</h3>
              <p className="noticias-descripcion">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt rem tenetur et voluptates possimus. Quam alias, amet
                fugiat temporibus possimus quia. Quod, velit fugiat facere
                obcaecati similique excepturi hic illum.
              </p>

              <p className="noticias-autor">Roberto Sosa</p>
              <p className="noticias-fecha">10/12/24</p>
            </div>
          </div>
          <div className="noticias-card">
            <div className="card-img-noticia">
              <img
                src="https://images.pexels.com/photos/4003171/pexels-photo-4003171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="img"
              />
            </div>
            <div className="card-body-noticia">
              <h3 className="noticias-titulo">paisajes lindos</h3>
              <p className="noticias-descripcion">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt rem tenetur et voluptates possimus. Quam alias, amet
                fugiat temporibus possimus quia. Quod, velit fugiat facere
                obcaecati similique excepturi hic illum.
              </p>

              <p className="noticias-autor">Roberto Sosa</p>
              <p className="noticias-fecha">10/12/24</p>
            </div>
          </div>
          <div className="noticias-card">
            <div className="card-img-noticia">
              <img
                src="https://images.pexels.com/photos/4003171/pexels-photo-4003171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="img"
              />
            </div>
            <div className="card-body-noticia">
              <h3 className="noticias-titulo">paisajes lindos</h3>
              <p className="noticias-descripcion">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt rem tenetur et voluptates possimus. Quam alias, amet
                fugiat temporibus possimus quia. Quod, velit fugiat facere
                obcaecati similique excepturi hic illum.
              </p>

              <p className="noticias-autor">Roberto Sosa</p>
              <p className="noticias-fecha">10/12/24</p>
            </div>
          </div>
          <div className="noticias-card">
            <div className="card-img-noticia">
              <img
                src="https://images.pexels.com/photos/4003171/pexels-photo-4003171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="img"
              />
            </div>
            <div className="card-body-noticia">
              <h3 className="noticias-titulo">paisajes lindos</h3>
              <p className="noticias-descripcion">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt rem tenetur et voluptates possimus. Quam alias, amet
                fugiat temporibus possimus quia. Quod, velit fugiat facere
                obcaecati similique excepturi hic illum.
              </p>

              <p className="noticias-autor">Roberto Sosa</p>
              <p className="noticias-fecha">10/12/24</p>
            </div>
          </div>
          <div className="noticias-card">
            <div className="card-img-noticia">
              <img
                src="https://images.pexels.com/photos/4003171/pexels-photo-4003171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="img"
              />
            </div>
            <div className="card-body-noticia">
              <h3 className="noticias-titulo">paisajes lindos</h3>
              <p className="noticias-descripcion">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt rem tenetur et voluptates possimus. Quam alias, amet
                fugiat temporibus possimus quia. Quod, velit fugiat facere
                obcaecati similique excepturi hic illum.
              </p>

              <p className="noticias-autor">Roberto Sosa</p>
              <p className="noticias-fecha">10/12/24</p>
            </div>
          </div>
          <div className="noticias-card">
            <div className="card-img-noticia">
              <img
                src="https://images.pexels.com/photos/3671143/pexels-photo-3671143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="img"
              />
            </div>
            <div className="card-body-noticia">
              <h3 className="noticias-titulo">paisajes lindos</h3>
              <p className="noticias-descripcion">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt rem tenetur et voluptates possimus. Quam alias, amet
                fugiat temporibus possimus quia. Quod, velit fugiat facere
                obcaecati similique excepturi hic illum.
              </p>

              <p className="noticias-autor">Roberto Sosa</p>
              <p className="noticias-fecha">10/12/24</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default noticias;
