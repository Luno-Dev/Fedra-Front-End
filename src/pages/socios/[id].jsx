
import Navs from '@/components/common/Navs';
import React from 'react'
import { Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import dynamic from "next/dynamic";
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import "../../styles/Home.module.css"

const token = () => {
  const isServer = typeof window === 'undefined';
  let data;
  if (!isServer) {
    data = JSON.parse(localStorage.getItem("token"));
  }

  return data;
}


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

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.trabajadornombre}</title>
      </Helmet>
      <Navs />


      <div className="container my-3" >

        <Table hover size="sm" responsive className='table-dark' ref={tableRef}>
          <thead className='text-cyan'>
            <tr className='text-cyan '>
              <th className='text-cyan text-center'>Datos</th>
              <th className='text-cyan text-center'>Informacion Socio</th>
            </tr>
          </thead>
          <tbody>

            <tr key={props.socioid}>
              <th>id</th>
              <th>{props.socioid}</th>
            </tr>
            <tr>
              <th>Nombre y Apellido</th>
              <th>{props.trabajadornombre}  {props.trabajadorapellido} </th>
            </tr>
            <tr>
              <th>Sexo</th>
              <th>{props.trabajadorsexo}</th>
            </tr>
            <tr>
              <th>Provincia</th>
              <th>{props.trabajadorprovincia} </th>
            </tr>
            <tr>
              <th>Localidad</th>
              <th>{props.trabajadorlocalidad}</th>
            </tr>
            <tr>
              <th>Nacionalidad</th>
              <th>{props.trabajadornacionalidad} </th>
            </tr>
            <tr>
              <th>Fecha de Nacimiento</th>
              <th>{props.trabajadornacimiento} </th>
            </tr>
            <tr>
              <th>D.N.I</th>
              <th>{props.trabajadordocumento}</th>
            </tr>
            <tr>
              <th>C.U.I.L</th>
              <th>{props.trabajadorcuil}</th>
            </tr>
            <tr>
              <th>Estado Civil</th>
              <th>{props.trabajadorestadocivil}</th>
            </tr>
            <tr>
              <th>Domicilio</th>
              <th>{props.trabajadordomicilio}</th>
            </tr>
            <tr>
              <th>Numero de Domicilio</th>
              <th>{props.trabajadornumdomicilio}</th>
            </tr>

            <tr>
              <th>Depto</th>
              <th>{props.trabajadordepto}</th>
            </tr>

            <tr>
              <th>Piso</th>
              <th>{props.trabajadorpiso}</th>
            </tr>

            <tr>
              <th>Celular</th>
              <th>{props.trabajadorcel}</th>
            </tr>
            <tr>
              <th>Telefono</th>
              <th>{props.trabajadortel}</th>
            </tr>
            <tr>
              <th>Email</th>
              <th>{props.email}</th>
            </tr>

            <tr><th className='text-cyan text-center'>Datos del Empleador</th></tr>
            <tr>
              <th>C.U.I.L</th>
              <th>{props.empleadorcuil}</th>
            </tr>
            <tr>
              <th>Empleador Domicilio</th>
              <th>{props.empleadordomicilio}</th>
            </tr>
            <tr>
              <th>Empleador Localidad</th>
              <th>{props.empleadorlocalidad}</th>
            </tr>
            <tr>
              <th>Empleador Provincia</th>
              <th>{props.empleadorprovincia}</th>
            </tr>
            <tr>
              <th>Razon Social</th>
              <th>{props.empleadorrazonsocial}</th>
            </tr>
            <tr>
              <th>Razon Social</th>
              <th>{props.empleadorrazonsocial}</th>
            </tr>
            <tr>
              <th>Actividad del Empleador</th>
              <th>{props.empleadoractividad}</th>
            </tr>
            <tr>
              <th>Domicilio del Lugar de Trabajo</th>
              <th>{props.empleadortrabajodomicilio}</th>
            </tr>
            <tr>
              <th>Localidad del Lugar de Trabajo</th>
              <th>{props.empleadortrabajolocalidad}</th>
            </tr>
            <tr>
              <th>Provincia del Lugar de Trabajo</th>
              <th>{props.empleadortrabajoprovincia}</th>
            </tr>


            <tr>
              <th>Lugar de Trabajo</th>
              <th>{props.trabajadorlugardetrabajo}</th>
            </tr>

            <tr>
              <th>Tareas que realiza en el Trabajo</th>
              <th>{props.trabajadortareas}</th>
            </tr>


            <th>

            </th>

          </tbody>
        </Table>

        <div className="container d-flex justify-content-center gap-3 ">
          <button className='btn btn-success fw-bold' onClick={onDownload}>Exportar a Excel <i className="bi bi-file-earmark-spreadsheet"></i></button>
          <button className="btn btn-danger fw-bold" onClick={generatePDF}>Exportar A PDF <i className="bi bi-filetype-pdf"></i></button>
        </div>

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
      props: data.socio,
    }
  } catch (error) {
    console.log(error);
  }
}