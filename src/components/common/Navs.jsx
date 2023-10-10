import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ActiveLink from "./ActiveLink";
import swal from "sweetalert";
import Image from 'next/image'
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

const Navs = () => {

  const [token, setToken] = useState(false);
  const [id, setId] = useState("");
  const [tokenSocio, setTokenSocio] = useState(false);



  const history = useRouter();

  useEffect(() => {

    const handleCookieChange = () => {
      const cookie = new Cookies();

      if (cookie.get("token")) {
        setToken(true);

      } else if (localStorage.getItem("tokenSocio")) {
        setTokenSocio(true);
        setId(JSON.parse(localStorage.getItem("id")));
      }
    };

    handleCookieChange();

    const interval = setInterval(handleCookieChange, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => {
      clearInterval(interval);
    };

  }, [history])

  const logOut = () => {
    swal(`Gracias por visitarnos, ¡vuelve pronto!`, { icon: "success" }).then((a) => {
      if (a) {
        const cookie = new Cookies();
        cookie.remove("token");
        localStorage.removeItem("token");
        localStorage.removeItem("tokenSocio");
        localStorage.removeItem("role");
        localStorage.removeItem("nombreUsuario");    
        setToken(false);
        setTokenSocio(false);
        location.replace("/");
      }
    });
  }

  return (
    <Navbar variant="dark" expand="lg" className="rounded-bottom bg-darkblue">
      <Container>
        <Navbar.Brand className="text-cyan d-flex align-items-center gap-2" href="/">
          <Image src="/FEDRAlogo.png" width={55} height={55} alt="Logo de FEDRA" />
          <div>
            <span className="text-cyan fw-semibold">FEDRA</span>
            <span className="d-none d-lg-block fw-light fs-7">
              Federación de Entidades de Discotecas <br></br> de la República Argentina
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <ActiveLink className="ms-auto nav-link" href="/">
              Inicio
            </ActiveLink>
            <ActiveLink className="ms-auto nav-link" href="/constitucion">
              Constitución
            </ActiveLink>
            <ActiveLink className="ms-auto nav-link" href="/quienesSomos">
              Quiénes somos
            </ActiveLink>
            <ActiveLink className="ms-auto nav-link" href="/temasDeTrabajo">
              Temas de trabajo
            </ActiveLink>
            <ActiveLink className="ms-auto nav-link" href="/noticias">
              Noticias
            </ActiveLink>
            <ActiveLink className="ms-auto nav-link" href="/contacto">
              Contacto
            </ActiveLink>
            <ActiveLink className="ms-auto nav-link" href="/registro">
              Registro Personal
            </ActiveLink>
            <>
              {token ?
                <>
                  <ActiveLink className="ms-auto nav-link" href="/administracion">
                    Administracion
                  </ActiveLink>
                  <a title="cerrar session" className="ms-auto nav-link " onClick={logOut}>
                    <i className="bi bi-box-arrow-left"></i>
                  </a> </>
                : tokenSocio ?
                  <> <ActiveLink className="ms-auto nav-link" href={`/socios/perfil/${id}`}>
                    Mi Perfil
                  </ActiveLink>
                    <a title="cerrar session" className="ms-auto nav-link" onClick={logOut}>
                      <i className="bi bi-box-arrow-left"></i>
                    </a> </>
                  :
                  <a title="ingresar" className="ms-auto nav-link" href="/loginSocios">
                    Ingresar
                  </a>

              }
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
