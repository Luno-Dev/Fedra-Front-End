import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ActiveLink from "./ActiveLink";

const Navs = () => {
  return (
    <Navbar variant="dark" expand="lg" className="rounded-bottom bg-darkblue">
      <Container>
        <Navbar.Brand className="text-cyan" href="/">
          FEDRA
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
