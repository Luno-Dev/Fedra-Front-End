import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ActiveLink from "./ActiveLink";
import swal from "sweetalert";

const Navs = () => {


  const [token, setToken] = useState('');

  useEffect(() => {

    setToken(localStorage.getItem('token'));

  }, [])
  


  const logOut = () => {
    

    swal(`Gracias por Visitarnos Vuelva Pronto!`, { icon: "success"}).then((active)=>{
      if(active){
       location.replace("/");
       localStorage.removeItem("token");
       localStorage.removeItem("nombreUsuario");
      }
    });
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
                :
                <ActiveLink title="ingresar" className="ms-auto nav-link" href="/logins">
                  <i className="bi bi-box-arrow-in-right"></i>
                </ActiveLink>

              }
            </>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
