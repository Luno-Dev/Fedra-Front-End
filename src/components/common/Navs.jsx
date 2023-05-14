import React from "react";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navs = () => {
  return (
      <Navbar variant="dark" expand="lg" className="bg-darkblue">
        <Container>
          <Navbar.Brand className="text-cyan" href="/">
            FEDRA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link end className="nav-link" href="/">
                Inicio
              </Link>
              <Link end className="nav-link" href="/sobreNosotros">
                Sobre nosotros
              </Link>
              <Link end className="nav-link" href="/quienesSomos">
                Quiénes somos
              </Link>
              <Link end className="nav-link" href="/temasDeTrabajo">
                Temas de trabajo
              </Link>
              <Link end className="nav-link" href="/noticias">
                Noticias
              </Link>
              <Link end className="nav-link" href="/contacto">
                Contacto
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Navs;
