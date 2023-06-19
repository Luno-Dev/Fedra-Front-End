import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ActiveLink from "./ActiveLink";
import swal from "sweetalert";

const Navs = () => {


const logOut = ()=>{
  localStorage.removeItem("token");
  swal(`Gracias por Visitarnos Vuelva Pronto!`, "success");
  
}


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

            {

              <ActiveLink className="ms-auto nav-link" href="/administracion">
                Administracion
              </ActiveLink>
            }

            <ActiveLink title="ingresar" className="ms-auto nav-link" href="/logins">
              <i class="bi bi-box-arrow-in-right"></i>
            </ActiveLink>
            <buton title="cerrar session" className="ms-auto nav-link " onClick={logOut}>
            <i className="bi bi-box-arrow-left"></i>
            </buton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
