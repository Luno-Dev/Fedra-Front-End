import TablaCreateEEm from '@/components/admi/TablaCreateEEm';
import Tablaeditemp from '@/components/admi/Tablaeditemp';
import Navs from '@/components/common/Navs';
import { DataContext } from '@/components/context/DataContext';
import { crearDeuda, deleteEmpleadoSocio, putSocio } from '@/helpers/fechSociosAdmi';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap';
import { Cookies } from 'react-cookie';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { Helmet } from 'react-helmet';
import { useReactToPrint } from 'react-to-print';

const token = () => {
    const isServer = typeof window === 'undefined';
    let data;
    if (!isServer) {
        data = JSON.parse(localStorage.getItem("token"));
    }

    return data;
}


export const socio = (props) => {

    const { show, setShow, edit, setEdit, setEditPublicaciones, editPublicaciones, editEm, setEditem, editEmp, setEditEmp } = useContext(DataContext);

    const { empleador, empleados } = props;

    const [usuarioOnline, setUsuarioOnline] = useState("");
    let total = 0;
 

    const editarEmpleado = async (data) => {
        setEditem(true);
        setEditEmp(data);
    };

    const tableRef = useRef(null);
    const generatePDF = useReactToPrint({
        content: () => tableRef.current,
        documentTitle: `Datos Empleados`

    })
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: "Datos Usuario",
        sheet: "Datos Usuario",
    });


    const eliminarEmpleado = (id) => {
        swal({
            title: "Esta seguro?",
            text: "Esta accion es inrreversible!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Empleado eliminado con Exito!", {
                        icon: "success",
                    });
                    deleteEmpleadoSocio(id);


                } else {
                    swal("Operacion cancelada con exito!", {
                        icon: "success",

                    });
                }
            });

    };

    const infoPago = async (id) => {


        const response = await putSocio(id, "INFORMADO");

        if (response === "Socio Actualizado") {
            swal("Aviso Enviado!", {
                icon: "success",
            });
            location.reload();
        } else {
            swal(response, {
                icon: "warning",

            });
        }

    };

    const history = useRouter();

    useEffect(() => {
        setUsuarioOnline(JSON.parse(localStorage.getItem('nombreUsuario')));

        const handleCookieChange = () => {
            const cookie = new Cookies();
            if (!cookie.get("tokensocio")) {
                history.push("/loginSocios");

            }

        };

        handleCookieChange();

        const interval = setInterval(handleCookieChange, 1000);

        // Limpiar el intervalo al desmontar el componente
        return () => {
            clearInterval(interval);
        };

    }, [history])

    return (

        <>

            <Helmet>
                <meta charSet="utf-8" />{props.empleador ?
                    <title>{props.empleador.empleadorrazonsocial}</title> : ""}
            </Helmet>
            <Navs />
            {!editEm ?
                <div className='container my-3'>

                    <h3 className=" text-cyan">Socio conectado: {usuarioOnline}</h3>
                    <Row className="mt-4">
                        <Col className="d-flex flex-colum">
                            <div className="d-flex">
                                <Button className="bg-darkblue m-2" download="FEDRA-ESTATUTOS.pdf" href="FEDRA-ESTATUTOS.pdf">
                                    <i className="bi bi-file-earmark-arrow-down text-cyan"> Estatutos y Acta Fundacional PDF</i>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <div className='container g-2'>
                        <h2 className='text-center text-cyan'>Empleados</h2>
                        <Table striped hover size="sm" responsive className='table-dark' ref={tableRef} >
                            <thead>
                                <tr>
                                    <th className='text-center'>Nombre Apellido</th>
                                    <th className='text-center'>Provincia</th>
                                    <th className='text-center'>Nacionalidad</th>
                                    <th className='text-center'>Estado Civil</th>
                                    <th className='text-center'>CUIL</th>
                                    <th className='text-center'>Celular</th>
                                    <th className='text-center'>Provincia</th>
                                    <th className='text-center'>Tareas</th>
                                    <th className='text-center'>Sueldo</th>
                                    <th className='column-funciones text-center'>Opciones</th>
                                    <th className='text-center'>Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.empleados ?
                                    props.empleados.map((index) => {
                                        total += index.trabajadorsueldo
                                        return (

                                            <tr key={index.trabajadordocumento}>
                                                <th>{index.trabajadornombre}  {index.trabajadorapellido} </th>
                                                <th className='text-center'>{index.trabajadorprovincia} </th>
                                                <th className='text-center'>{index.trabajadornacionalidad} </th>
                                                <th className='text-center'>{index.trabajadorestadocivil}</th>
                                                <th className='text-center'>{index.trabajadorcuil}</th>
                                                <th className='text-center'>{index.trabajadorcel}</th>
                                                <th className='text-center'>{index.trabajadorprovincia}</th>
                                                <th className='text-center'>{index.trabajadortareas}</th>

                                                <th className='text-center'>$ {index.trabajadorsueldo}</th>

                                                <th className='d-flex flex-wrap flex-column p-2 column-funciones'>
                                                    <a title='ver empleado' className='btn bg-cyan text-light fw-bold m-2 column-funciones' href={`/socios/perfil/empleados/${index.eId}`}>Ver</a>
                                                    <button title='eliminar empleado' className='btn btn-danger text-light fw-bold m-2 column-funciones' onClick={() => eliminarEmpleado(index.eId)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                        </svg>
                                                    </button>

                                                </th>
                                                <th>
                                                    <button className='btn btn-success text-light fw-bold m-2 column-funciones' onClick={() => editarEmpleado(index)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                        </svg>
                                                    </button>

                                                </th>
                                            </tr>
                                        )


                                    }) : <></>
                                }
                            </tbody>

                        </Table> {empleador ?
                            empleador.convenio === "SUTCAPRA" && empleador.estadoPago === "DEBE" ?
                                <div className='m-3 d-flex gap-3 '>
                                    <span> Total a  Pagar = $ {total * 1 / 100}   </span>
                                    
                                    <button className="btn bg-cyan  text-light fw-bold" onClick={() => infoPago(empleador.socioid)} >Informar Pago</button>
                                    <button className="btn btn-success fw-bold" onClick={() => crearDeuda(empleador.empleadorcuil, total)} >Pagar  <i className="bi bi-credit-card-fill"></i></button>

                                </div> : <h4 className='m-2'>Su aporte a sido: {empleador.estadoPago}</h4> : <></>
                        }



                        {props.empleador ?
                            <>
                                <h2 className='text-cyan text-center'>Informacion del Empleador </h2>
                                <Table hover size="sm" responsive className='table-dark mt-5' ref={tableRef}>

                                    <tbody>
                                        <tr>
                                            <th>C.U.I.L</th>
                                            <th>{props.empleador.empleadorcuil}</th>
                                        </tr>
                                        <tr>
                                            <th>Empleador Domicilio</th>
                                            <th>{props.empleador.empleadordomicilio}</th>
                                        </tr>
                                        <tr>
                                            <th>Empleador Localidad</th>
                                            <th>{props.empleador.empleadorlocalidad}</th>
                                        </tr>
                                        <tr>
                                            <th>Empleador Provincia</th>
                                            <th>{props.empleador.empleadorprovincia}</th>
                                        </tr>
                                        <tr>
                                            <th>Razon Social</th>
                                            <th>{props.empleador.empleadorrazonsocial}</th>
                                        </tr>
                                        <tr>
                                            <th>Razon Social</th>
                                            <th>{props.empleador.empleadorrazonsocial}</th>
                                        </tr>
                                        <tr>
                                            <th>Actividad del Empleador</th>
                                            <th>{props.empleador.empleadoractividad}</th>
                                        </tr>
                                        <tr>
                                            <th>Localidad del Lugar de Trabajo</th>
                                            <th>{props.empleador.empleadortrabajolocalidad}</th>
                                        </tr>
                                        <tr>
                                            <th>Provincia del Lugar de Trabajo</th>
                                            <th>{props.empleador.empleadortrabajoprovincia}</th>
                                        </tr>
                                        <th>

                                        </th>

                                    </tbody>
                                </Table></> : <></>}
                    </div>


                    <div className="container d-flex justify-content-center gap-3 ">
                        <button className='btn btn-success fw-bold' onClick={onDownload}>Exportar a Excel <i className="bi bi-file-earmark-spreadsheet"></i></button>
                        <button className="btn btn-danger fw-bold" onClick={generatePDF}>Exportar A PDF <i className="bi bi-filetype-pdf"></i></button>


                    </div>

                    <TablaCreateEEm />


                </div>
                : <Tablaeditemp />

            }

        </>

    )
}


export default dynamic(() => Promise.resolve(socio), { ssr: false })



export async function getStaticPaths() {



    const response = await fetch(`https://fedra-back-nicolasmoralesdev.vercel.app/api/socios`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": token()
        },

    });
    const data = await response.json();

    const paths = []/* data.socios.map(({socioid})=> ({params:{id: `${socioid}`}}))      */

    return {
        paths,
        fallback: true
    }


}



export async function getStaticProps({ params }) {
    try {
        const response = await fetch(`https://fedra-back-nicolasmoralesdev.vercel.app/api/socios/empleados/${params.id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": token()
            },
        });
        const data = await response.json();

        return {
            props: data,
        }
    } catch (error) {
        console.log(error);
    }
}