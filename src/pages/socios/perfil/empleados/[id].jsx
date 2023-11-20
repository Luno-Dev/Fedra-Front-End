
import Navs from '@/components/common/Navs';
import React from 'react'
import { Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import dynamic from "next/dynamic";
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';


export const socios = (props) => {


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

  const volver = () => {
    location.replace(`/socios/perfil/${props.empleado.socio}`)
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        {props.empleado ? <title>{props.empleado.trabajadornombre}</title> : <title></title>}
      </Helmet>
      <Navs />


      <div className="container my-3" >
        {props.empleado ?
          <Table hover size="sm" responsive className='table-dark' ref={tableRef}>
            <thead className='text-cyan'>
              <tr className='text-cyan '>
                <th className='text-cyan text-center'>Datos del Empleado</th>
                <th className='text-cyan text-center'>Informacion</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <th>id</th>
                <th>{props.empleado.eId}</th>
              </tr>
              <tr>
                <th>Trabajador Nombre</th>
                <th>{props.empleado.trabajadornombre}</th>
              </tr>
              <tr>
                <th>Trabajador Apellido</th>
                <th>{props.empleado.trabajadorapellido}</th>
              </tr>
              <tr>
                <th>Trabajador Nacionalidad</th>
                <th>{props.empleado.trabajadornacionalidad}</th>
              </tr>
              <tr>
                <th>Trabajador Estado Civil</th>
                <th>{props.empleado.trabajadorestadocivil}</th>
              </tr>
              <tr>
                <th>Sexo</th>
                <th>{props.empleado.trabajadorsexo}</th>
              </tr>
              <tr>
                <th>Fecha de Nacimiento</th>
                <th>{props.empleado.trabajadornacimiento}</th>
              </tr>
              <tr>
                <th>DNI</th>
                <th>{props.empleado.trabajadordocumento}</th>
              </tr>
              <tr>
                <th>C.U.I.L</th>
                <th>{props.empleado.trabajadorcuil}</th>
              </tr>
              <tr>
                <th> Domicilio</th>
                <th>{props.empleado.trabajadordomicilio}</th>
              </tr>
              <tr>
                <th>Piso</th>
                <th>{props.empleado.trabajadorpiso ? props.empleado.trabajadorpiso : "---"}</th>
              </tr>
              <tr>
                <th>Depto</th>
                <th>{props.empleado.trabajadordepto ? props.empleado.trabajadordepto : "---"}</th>
              </tr>
              <tr>
                <th>Localidad</th>
                <th>{props.empleado.trabajadorlocalidad}</th>
              </tr>

              <tr>
                <th> Provincia</th>
                <th>{props.empleado.trabajadorprovincia}</th>
              </tr>
              <tr>
                <th>Domicilio del Lugar de Trabajo</th>
                <th>{props.empleado.trabajadorlugardetrabajo}</th>
              </tr>
              <tr>
                <th>Localidad del Lugar de Trabajo</th>
                <th>{props.empleado.trabajadorlocalidad}</th>
              </tr>
              <tr>
                <th>Provincia del Lugar de Trabajo</th>
                <th>{props.empleado.trabajadorprovincia}</th>
              </tr>
              <tr>
                <th>Lugar de Trabajo</th>
                <th>{props.empleado.trabajadorlugardetrabajo}</th>
              </tr>

              <tr>
                <th>Tareas que realiza en el Trabajo</th>
                <th>{props.empleado.trabajadortareas}</th>
              </tr>

              <tr>
                <th>Telefono</th>
                <th>{props.empleado.trabajadortel}</th>
              </tr>
              <tr>
                <th>Celular</th>
                <th>{props.empleado.trabajadorcel}</th>
              </tr>
              <tr>
                <th>Periodo que Abona</th>
                <th>{props.fechas}</th>
              </tr>
              <tr>
                <th>Sueldo</th>
                <th>$ {props.empleado.trabajadorsueldo}</th>
              </tr>



            </tbody>
          </Table> : <></>}
        <div className="container d-flex justify-content-center gap-3 ">
          <button className='btn btn-success fw-bold' onClick={onDownload}>Exportar a Excel <i className="bi bi-file-earmark-spreadsheet"></i></button>
          <button className="btn btn-danger fw-bold" onClick={generatePDF}>Exportar A PDF <i className="bi bi-filetype-pdf"></i></button>
          <button className='btn bg-cyan fw-bold text-light' onClick={() => volver()}>Ir a Pagar</button>

        </div>

      </div>
    </>

  )
}

export default dynamic(() => Promise.resolve(socios), { ssr: false })


export async function getStaticPaths() {



  const response = await fetch(`https://fedra-back-nicolasmoralesdev.vercel.app/api/socios/empleados`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
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
    const response = await fetch(`https://fedra-back-nicolasmoralesdev.vercel.app/api/socios/empleado/detalle/${params.id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
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

