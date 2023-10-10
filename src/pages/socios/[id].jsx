
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

   location.reload()  

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
        <meta charSet="utf-8" />{ props.socio ?
        <title>{props.socio.empleadorrazonsocial}</title>: ""}
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

        <h2 className="text-center text-cyan m-5">Empleados</h2>
        {
          props.empleados ?
            props.empleados.map(index => (

              <Table hover size="sm" responsive className='table-dark' ref={tableRef}>
                <thead className='text-cyan'>
                  <tr className='text-cyan '>
                    <th className='text-cyan text-center'>Datos del Empleado</th>
                    <th className='text-cyan text-center'>Informacion</th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    <tr >
                      <th>id</th>
                      <th>{index.eId}</th>
                    </tr>
                    <tr>
                      <th>Trabajador Nombre</th>
                      <th>{index.trabajadornombre}</th>
                    </tr>
                    <tr>
                      <th>Trabajador Apellido</th>
                      <th>{index.trabajadorapellido}</th>
                    </tr>
                    <tr>
                      <th>Trabajador Nacionalidad</th>
                      <th>{index.trabajadornacionalidad}</th>
                    </tr>
                    <tr>
                      <th>Trabajador Estado Civil</th>
                      <th>{index.trabajadorestadocivil}</th>
                    </tr>
                    <tr>
                      <th>Sexo</th>
                      <th>{index.trabajadorsexo}</th>
                    </tr>
                    <tr>
                      <th>Fecha de Nacimiento</th>
                      <th>{index.trabajadornacimiento}</th>
                    </tr>
                    <tr>
                      <th>DNI</th>
                      <th>{index.trabajadordocumento}</th>
                    </tr>
                    <tr>
                      <th>C.U.I.L</th>
                      <th>{index.trabajadorcuil}</th>
                    </tr>
                    <tr>
                      <th> Domicilio</th>
                      <th>{index.trabajadordomicilio}</th>
                    </tr>

                    <tr>
                      <th>Calle</th>
                      <th>{index.trabajadornumdomicilio}</th>
                    </tr>
                    <tr>
                      <th>Piso</th>
                      <th>{index.trabajadorpiso ? index.trabajadorpiso : "---"}</th>
                    </tr>
                    <tr>
                      <th>Depto</th>
                      <th>{index.trabajadordepto ? index.trabajadordepto : "---"}</th>
                    </tr>
                    <tr>
                      <th>Localidad</th>
                      <th>{index.trabajadorlocalidad}</th>
                    </tr>

                    <tr>
                      <th> Provincia</th>
                      <th>{index.trabajadorprovincia}</th>
                    </tr>
                    <tr>
                      <th>Domicilio del Lugar de Trabajo</th>
                      <th>{index.trabajadorlugardetrabajo}</th>
                    </tr>
                    <tr>
                      <th>Localidad del Lugar de Trabajo</th>
                      <th>{index.trabajadorlocalidad}</th>
                    </tr>
                    <tr>
                      <th>Provincia del Lugar de Trabajo</th>
                      <th>{index.trabajadorprovincia}</th>
                    </tr>
                    <tr>
                      <th>Lugar de Trabajo</th>
                      <th>{index.trabajadorlugardetrabajo}</th>
                    </tr>

                    <tr>
                      <th>Tareas que realiza en el Trabajo</th>
                      <th>{index.trabajadortareas}</th>
                    </tr>

                    <tr>
                      <th>Telefono</th>
                      <th>{index.trabajadortel}</th>
                    </tr>
                    <tr>
                      <th>Celular</th>
                      <th>{index.trabajadorcel}</th>
                    </tr>

                    <tr>
                      <th>Sueldo</th>
                      <th>$ {index.trabajadorsueldo}</th>
                    </tr>

                  </>



                </tbody>
              </Table>))


            : <></>

        }
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