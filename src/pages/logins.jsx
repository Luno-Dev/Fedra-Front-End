import Navs from '@/components/common/Navs';
import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { login } from "../helpers/fetchAuth";
import swal from 'sweetalert';
import { Helmet } from 'react-helmet';



const logins = () => {


  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState([]);


  const handleSubmit = async (e) => {

    e.preventDefault();
    const datos = await login({nombre, email, password });

    if (datos?.token) {

      localStorage.setItem("token", JSON.stringify(datos.token));
      localStorage.setItem("nombreUsuario", JSON.stringify(datos.usuario.nombre));

      swal(`Bienvenido ${datos.usuario.nombre}`, "Haz Clik para continuar!", "success").then((active)=>{
        
       if(active){
         
         location.replace("/administracion");
        } 
      });

    } else {
      if (datos?.errors) {
        setMessage(datos.errors);
      } else {
        setMessage([{ msg: datos.msg }]);
      }
    }
  };

  return (
   <>
       <Helmet>
        <meta charSet="utf-8" />
    {/*     <link rel="shortcut icon" href={favicon} type="image/x-icon" /> */}
        <title>Ingreso Administradores</title>
      </Helmet>

<Navs/> 


<h1 className='text-center mt-5'>Ingreso de Administradores</h1>
   <main className="w-100 d-flex position-relative justify-content-center">

   
   <Form className='w-25-lg-w-50 m-5' onSubmit={handleSubmit}>
   <Form.Group className="mb-3">
        <Form.Label>Usuario:</Form.Label>
        <Form.Control type="text"
               value={nombre}
               onChange={(e) => setNombre(e.target.value)}
               autoFocus={true}
               required
         placeholder="usuario..." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               autoFocus={true}
               required
         placeholder="nombre@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contraseña:</Form.Label>
        <Form.Control type="password"
            value={password}
            required
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
         placeholder="ingrese su contraseña..." />

      </Form.Group>

      {message.length > 0 &&
                    message.map((item, index) => (
                      <div key={index} className="login__alertas   alert alert-danger " role="alert">
                        {item.msg}
                      </div>


                    ))}
      <button className='btn btn-success'>ingresar</button>
    </Form>
   </main>
   </>
  )
}

export default logins