
import Navs from '@/components/common/Navs';
import React, { useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import dynamic from "next/dynamic";
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import "../../styles/Home.module.css"
import { getRegistros } from '@/helpers/fechSociosAdmi';

const token = () => {
  const isServer = typeof window === 'undefined';
  let data;
  if (!isServer) {
    data = JSON.parse(localStorage.getItem("token"));
  }

  return data;
}


export const socios = (props) => {

  const [registros, setRegistros] = useState([]);
  const [empleados, setEmpleados] = useState([]);


  const getRegisters = async () => {

    const request = await getRegistros(location.pathname);
    setRegistros(request.registros);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setEmpleados([]);
  };

  const handleShow = (emp) => {

    const data = emp[0];
    setEmpleados(data);
    setShow(true);

  };


  useEffect(() => {

    getRegisters()

  }, [])



  const tableRef = useRef(null);
  const generatePDF = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: `Datos socio - ${props.trabajadornombre}`

  })
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Datos Usuario",
    sheet: "Datos Usuario",
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />{props.socio ?
          <title>{props.socio.empleadorrazonsocial}</title> : ""}
      </Helmet>
      <Navs />


      <div className="container my-3" >
        <h2 className="text-center text-cyan m-5">Datos del Empleador</h2>


        <Table hover size="sm" responsive className='table-dark' ref={tableRef}>
          <thead className='text-cyan'>
            <tr className='text-cyan '>
              <th className='text-cyan text-center'>Datos del Empleador</th>
              <th className='text-cyan text-center'>Informacion</th>
            </tr>
          </thead>
          <tbody>
            {props.socio ?
              <>
                <tr>
                  <th>id</th>
                  <th>{props.socio.socioid}</th>
                </tr>
                <tr>
                  <th>C.U.I.L</th>
                  <th>{props.socio.empleadorcuil}</th>
                </tr>
                <tr>
                  <th>Empleador Domicilio</th>
                  <th>{props.socio.empleadordomicilio}</th>
                </tr>
                <tr>
                  <th>Empleador Localidad</th>
                  <th>{props.socio.empleadorlocalidad}</th>
                </tr>
                <tr>
                  <th>Empleador Provincia</th>
                  <th>{props.socio.empleadorprovincia}</th>
                </tr>
                <tr>
                  <th>Razon Social</th>
                  <th>{props.socio.empleadorrazonsocial}</th>
                </tr>
                <tr>
                  <th>Actividad del Empleador</th>
                  <th>{props.socio.empleadoractividad}</th>
                </tr>
                <tr>
                  <th>Domicilio del Lugar de Trabajo</th>
                  <th>{props.socio.empleadortrabajodomicilio}</th>
                </tr>
                <tr>
                  <th>Localidad del Lugar de Trabajo</th>
                  <th>{props.socio.empleadortrabajolocalidad}</th>
                </tr>
                <tr>
                  <th>Provincia del Lugar de Trabajo</th>
                  <th>{props.socio.empleadortrabajoprovincia}</th>
                </tr>
                <tr>
                  <th>Correo</th>
                  <th>{props.socio.email}</th>
                </tr>
                <tr>
                  <th>Telefono</th>
                  <th>{props.socio.empleadortel}</th>
                </tr>
                <th>

                </th>
              </>
              : <></>
            }
          </tbody>
        </Table>

        <div className="container d-flex justify-content-center gap-3 ">
          <button className='btn btn-success fw-bold' onClick={onDownload}>Exportar a Excel <i className="bi bi-file-earmark-spreadsheet"></i></button>
          <button className="btn btn-danger fw-bold" onClick={generatePDF}>Exportar A PDF <i className="bi bi-filetype-pdf"></i></button>
        </div>

        <h2 className="text-center text-cyan m-5">Registros</h2>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className='text-cyan text-center'>id Registro</th>
              <th className='text-cyan text-center'>Mes y Año</th>
              <th className='text-cyan text-center'>Empleados</th>
              <th className='text-cyan text-center'>Valor Aporte</th>
            </tr>
          </thead>
          <tbody>

            {registros.map(i =>
              <>
                <tr>
                  <th>{i.registroid} </th>
                  <th> {i.mes} </th>
                  <th className='text-center'><button className='btn btn-success' onClick={()=> handleShow(i.empleados)}>Ver Empleados</button></th>
                  <th> $ {i.total} </th>
                </tr>

              </>
            )
            }

          </tbody>
        </Table>
      </div>
      <div
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
        >
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Empleados incluidos en este Aporte:</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className='text-cyan text-center'>Nombre</th>
              <th className='text-cyan text-center'>Apellido</th>
              <th className='text-cyan text-center'>Estado Civil</th>
              <th className='text-cyan text-center'>Nacionalidad</th>
              <th className='text-cyan text-center'>Sexo</th>
              <th className='text-cyan text-center'>Fecha de Nacimiento</th>
              <th className='text-cyan text-center'>DNI</th>
              <th className='text-cyan text-center'>C.U.I.L</th>
              <th className='text-cyan text-center'>Domicilio</th>
              <th className='text-cyan text-center'>Calle</th>
              <th className='text-cyan text-center'>Piso</th>
              <th className='text-cyan text-center'>Depto</th>
              <th className='text-cyan text-center'>Localidad</th>
              <th className='text-cyan text-center'>Provincia</th>
              <th className='text-cyan text-center'>Domicilio del Trabajo</th>
              <th className='text-cyan text-center'>Localidad del Trabajo</th>
              <th className='text-cyan text-center'>Provincia del Trabajo</th>
              <th className='text-cyan text-center'>Lugar de Trabajo</th>
              <th className='text-cyan text-center'>Tareas que realiza</th>
              <th className='text-cyan text-center'>Telefono</th>
              <th className='text-cyan text-center'>Celular</th>
              <th className='text-cyan text-center'>Fecha de Aporte</th>
              <th className='text-cyan text-center'>Sueldo</th>
            </tr>
          </thead>
          <tbody>

            {empleados.map(i =>
              <>
                <tr>
                  <th>{i.trabajadornombre} </th>
                  <th>{i.trabajadorapellido} </th>
                  <th>{i.trabajadornacionalidad} </th>
                  <th>{i.trabajadorestadocivil} </th>
                  <th>{i.trabajadorsexo} </th>
                  <th>{i.trabajadornacimiento} </th>
                  <th>{i.trabajadordocumento} </th>
                  <th>{i.trabajadorcuil} </th>
                  <th>{i.trabajadordomicilio} </th>
                  <th>{i.trabajadornumdomicilio} </th>
                  <th>{i.trabajadorpiso ? i.trabajadorpiso : "---"}</th>
                  <th>{i.trabajadordepto ? i.trabajadordepto : "---"}</th>
                  <th>{i.trabajadorlocalidad} </th>
                  <th>{i.trabajadorprovincia} </th>
                  <th>{i.trabajadorlugardetrabajo} </th>
                  <th>{i.trabajadorlocalidad} </th>
                  <th>{i.trabajadorprovincia} </th>
                  <th>{i.trabajadorlugardetrabajo} </th>
                  <th>{i.trabajadortareas} </th>
                  <th>{i.trabajadortel} </th>
                  <th>{i.trabajadorcel} </th>                         
                  <th>{i.fechaAporte} </th>
                  <th>$ { i.trabajadorsueldo} </th>                                                           
                </tr>
              </>
            )                            
            }

          </tbody>
        </Table>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
          </Modal>
        </div>
    </>

  )
}

export default dynamic(() => Promise.resolve(socios), { ssr: false })


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
    const response = await fetch(`https://fedra-back-nicolasmoralesdev.vercel.app/api/socios/${params.id}`, {
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