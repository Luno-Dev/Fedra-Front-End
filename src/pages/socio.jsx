import Navs from '@/components/common/Navs';
import { traerSocio } from '@/helpers/fetchAdmi';
import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useReactToPrint } from 'react-to-print';



const socio = () => {

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




    const verificador = () => {
        const isServer = typeof window === 'undefined';
        let data;
        if (!isServer) {
            const query = new URLSearchParams(window.location.search);
            data = query.get("id");
        }

        return data;
    }
    const [usuarioOnline, setUsuarioOnline] = useState("");
    const [socios, setSocios] = useState([]);

    const traerData = async () => {
        const id = verificador();
        const data = await traerSocio(id);

        setSocios(data.empleado);

    }
    useEffect(() => {

        traerData()
        setUsuarioOnline(JSON.parse(localStorage.getItem('nombreUsuario')));

    }, [])
    return (

        <>

            <Navs />

            <div className='container my-3'>

                <h3 className="text-center">Socio conectado: {usuarioOnline}</h3>
                <Row className="mt-4">
                    <Col className="d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex">
                            <Button className="bg-darkblue m-2" download="FEDRA-ESTATUTOS.pdf" href="FEDRA-ESTATUTOS.pdf">
                                <i className="bi bi-file-earmark-arrow-down text-cyan"> Estatutos y Acta Fundacional PDF</i>
                            </Button>
                        </div>
                    </Col>
                </Row>
                {
                    socios.length < 1 ?
                        <h1>hola</h1>
                        :

                        <>
                            <h2 className='text-center'>Empleados</h2>
                            <Table striped hover size="sm" responsive className='table-dark' ref={tableRef} >
                                <thead>
                                    <tr>
                                        <th>Nombre y Apellido</th>
                                        <th>Provincia</th>
                                        <th>Nacionalidad</th>
                                        <th>Estado Civil</th>
                                        <th>CUIL</th>
                                        <th>Celular</th>
                                        <th>Provincia</th>
                                        <th>Tareas</th>
                                        <th>Sueldo</th>
                                        <th className='column-funciones'>opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        socios.map((index) => (

                                            <tr key={index.trabajadordocumento}>
                                                <th>{index.trabajadornombre}  {index.trabajadorapellido} </th>
                                                <th>{index.trabajadorprovincia} </th>
                                                <th>{index.trabajadornacionalidad} </th>
                                                <th>{index.trabajadorestadocivil}</th>
                                                <th>{index.trabajadorcuil}</th>
                                                <th>{index.trabajadorcel}</th>
                                                <th>{index.trabajadorprovincia}</th>
                                                <th>{index.trabajadortareas}</th>

                                                <th>$ {index.trabajadorsueldo}</th>

                                                <th className='d-flex flex-wrap flex-column p-2 column-funciones'>
                                                    <a className='btn bg-cyan text-light fw-bold m-2 column-funciones' href={`/socios/${index.socioid}`}>Ver</a>
                                                    {/*  {index.estado.toString() === "false" ?
                  <button className='btn btn-success fw-bold m-2 column-funciones' onClick={() => cambiarEstadoSocio(index.socioid, index.estado.toString())}>Activar</button> :
                  <button className='btn btn-danger fw-bold m-2 column-funciones' onClick={() => cambiarEstadoSocio(index.socioid, index.estado.toString())}>Suspender</button>
                } */}
                                                </th>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                            <div className="container d-flex justify-content-center gap-3 ">
                                <button className='btn btn-success fw-bold' onClick={onDownload}>Exportar a Excel <i className="bi bi-file-earmark-spreadsheet"></i></button>
                                <button className="btn btn-danger fw-bold" onClick={generatePDF}>Exportar A PDF <i className="bi bi-filetype-pdf"></i></button>
                                <button className="btn btn-success fw-bold" >Pagar <i className="bi bi-credit-card-fill"></i></button>

                            </div>

                        </>



                }



            </div>


        </>

    )
}

export default socio