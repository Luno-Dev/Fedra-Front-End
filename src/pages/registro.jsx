import Navs from '@/components/common/Navs';
import React, {useState } from 'react'
import Form from 'react-bootstrap/Form';
import { crearUsuario } from "../helpers/fetchUsuarios";
import { Helmet } from "react-helmet";


const registro = () => {


    const [formValues, setFormValues] = useState({
        trabajadornombre: "",
        trabajadorapellido: "",
        trabajadornacionalidad: "",
        trabajadorestadocivil: "",
        trabajadorsexo: "",
        trabajadornacimiento: "",
        trabajadordocumento: "",
        trabajadorcuil: "",
        trabajadordomicilio: "",
        trabajadornumdomicilio: "",
        trabajadorpiso: "",
        trabajadordepto: "",
        trabajadorlocalidad: "",
        trabajadorprovincia: "",
        trabajadorlugardetrabajo: "",
        trabajadortareas: "",
        trabajadortel: "",
        trabajadorcel: "",
        empleadorrazonsocial: "",
        empleadordomicilio: "",
        empleadorprovincia: "",
        empleadortrabajodomicilio: "",
        empleadortrabajolocalidad: "",
        empleadortrabajoprovincia: "",
        empleadortrabajolocalidad: "",
        empleadoractividad: "",
        email: "",
        password: "",
        role: "SOCIO_ROLE",
        img:""
    });

    const [message, setMessage] = useState([]);


    const handleChange = ({ target }) => {
        let name = target.name;
        let value = target.value;

        setFormValues((prev) => { return { ...prev, [name]: value } });

    };

    const guardarDatos = async (e) => {
        e.preventDefault();


        if (formValues.password ) {

            console.log(formValues);
   const respuesta = await crearUsuario(formValues);

            if (respuesta?.usuario) {
                setMessage([{ ok: true, msg: respuesta.msg }]);
                setTimeout(() => {
                    setMessage([]);
                }, 3000);
            } else {
                if (respuesta?.errors) {
                    setMessage(respuesta.errors);
                } else {
                    setMessage([{ msg: respuesta.msg }]);
                }
            }
 
            setFormValues({
                trabajadornombre: "",
                trabajadorapellido: "",
                trabajadornacionalidad: "",
                trabajadorestadocivil: "",
                trabajadorsexo: "",
                trabajadornacimiento: "",
                trabajadordocumento: "",
                trabajadorcuil: "",
                trabajadordomicilio: "",
                trabajadornumdomicilio: "",
                trabajadorpiso: "",
                trabajadordepto: "",
                trabajadorlocalidad: "",
                trabajadorprovincia: "",
                trabajadorlugardetrabajo: "",
                trabajadortareas: "",
                trabajadortel: "",
                trabajadorcel: "",
                empleadorcuil: "",
                empleadorrazonsocial: "",
                empleadordomicilio: "",
                empleadorprovincia: "",
                empleadortrabajodomicilio: "",
                empleadortrabajolocalidad: "",
                empleadortrabajoprovincia: "",
                empleadortrabajolocalidad: "",
                empleadoractividad: "",
                email: "",
                password: "",
                role: "SOCIO_ROLE",
                img:""
            })

        } else {
            inputRef.current.setCustomValidity("Las contraseñas deben coincidir")
        }


    };
    return (
        
        <>
        
        <Helmet>
        <meta charSet="utf-8" />
    {/*     <link rel="shortcut icon" href={favicon} type="image/x-icon" /> */}
        <title>Registro de Personal</title>
      </Helmet>
            <Navs />
            <div >
                <h1 className='text-center m-5'>Registro de Personal</h1>

                <div className="m-5">
                    <h2>Trabajador</h2>
                    <Form onSubmit={ guardarDatos}>
                        <Form.Group className="mb-3 d-flex flex-wrap gap-5" controlId="formBasicEmail">
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='trabajadornombre'
                                    aria-describedby="trabajadornombre"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Apellido:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='trabajadorapellido'
                                    aria-describedby="apellido"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Nacionalidad:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='trabajadornacionalidad'
                                    aria-describedby="trabajadornacionalidad"
                                    onChange={handleChange}
                                    required

                                />
                            </div>

                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Estado Civil:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='trabajadorestadocivil'
                                    onChange={handleChange}
                                    aria-describedby="estadoCivil"
                                    required

                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Sexo</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='trabajadorsexo'
                                    onChange={handleChange}
                                    aria-describedby="sexo"
                                    required

                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Fecha de Nacimiento:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='trabajadornacimiento'
                                    onChange={handleChange}
                                    aria-describedby="fechaNacimiento"
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>D.N.I</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='trabajadordocumento'
                                    onChange={handleChange}
                                    aria-describedby="DNI"
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>CUIL:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='trabajadorcuil'
                                    onChange={handleChange}
                                    aria-describedby="cuil"
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Domicilio:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='trabajadordomicilio'
                                    onChange={handleChange}
                                    aria-describedby="domicilio"
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Numero de Domicilio:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='trabajadornumdomicilio'
                                    onChange={handleChange}
                                    aria-describedby="numDomicilio"
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Piso:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='trabajadorpiso'
                                    onChange={handleChange}
                                    aria-describedby="piso"

                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Numero de Departamento:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='trabajadordepto'
                                    onChange={handleChange}
                                    aria-describedby="depto"

                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Localidad:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='trabajadorlocalidad'
                                    onChange={handleChange}
                                    aria-describedby="localidad"
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Povincia:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='trabajadorprovincia'
                                    onChange={handleChange}
                                    aria-describedby="povincia"
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Lugar de Trabajo:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='trabajadorlugardetrabajo'
                                    onChange={handleChange}
                                    aria-describedby="trabajo"
                                    required

                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Tareas que Realiza:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='trabajadortareas'
                                    onChange={handleChange}
                                    aria-describedby="tareas"
                                    required

                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Telefono Fijo:</Form.Label>
                                <Form.Control
                                    type="telFijo"
                                    name='trabajadortel'
                                    onChange={handleChange}
                                    aria-describedby="telFijo"


                                />
                            </div>  <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Celular:</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name='trabajadorcel'
                                    onChange={handleChange}
                                    aria-describedby="celular"
                                    required

                                />
                            </div>
                        </Form.Group>

           
                    <h2>Empleador</h2>
                        <Form.Group className="mb-3 d-flex flex-wrap gap-5" controlId="formBasicEmail">
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>CUIL:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='empleadorcuil'
                                    onChange={handleChange}
                                    aria-describedby="empleadorcuil"
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Razon Social:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='empleadorrazonsocial'
                                    onChange={handleChange}
                                    aria-describedby="razonSocial"
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Domicilio Legal:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='empleadordomicilio'
                                    onChange={handleChange}
                                    aria-describedby="domicilioLegal"
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Localidad:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='empleadorlocalidad'
                                    onChange={handleChange}
                                    aria-describedby="empleadorlocalidad"
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Povincia:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='empleadorprovincia'
                                    onChange={handleChange}
                                    aria-describedby="empleadorprovincia"
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Domicilio del Lugar de Trabajo:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='empleadortrabajodomicilio'
                                    onChange={handleChange}
                                    aria-describedby="empleadortrabajodomicilio"
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Localidad del Lugar de Trabajo:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="empleadortrabajolocalidad"
                                    onChange={handleChange}
                                    aria-describedby="empleadortrabajolocalidad"
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Povincia del Lugar de Trabajo:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='empleadortrabajoprovincia'
                                    onChange={handleChange}
                                    aria-describedby="empleadortrabajoprovincia"
                                    required

                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Actividad del Empleador:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='empleadoractividad'
                                    onChange={handleChange}
                                    required
                                    aria-describedby="empleadoractividad"
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    type="email"
                                    name='email'
                                    onChange={handleChange}
                                    required
                                    aria-describedby="email"
                                />
                            </div>
                            <div className="d-flex flex-column w-25 flex-wrap">
                                <Form.Label>Contraseña:</Form.Label>
                                <Form.Control
                                    type="password"
                                    name='password'
                                    onChange={handleChange}
                                    required
                                    aria-describedby="password"
                                />
                            </div>

                        </Form.Group>

                     <button className='btn btn-success'>Registrarse</button>
                    </Form>
                </div>
            </div>
        </>

    )
}

export default registro