import { deleteSocio, putSocio, traerSocios } from '@/helpers/fetchAdmi';
import { useEffect, useRef, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useReactToPrint } from 'react-to-print';

function TablasUsuarios() {

  const [socios, setSocios] = useState([]);


  const recibirData = async () => {

    const socios = await traerSocios();
    setSocios(socios.socios);
  }


  const eliminarSocio = (id) => {
    swal({
      title: "Esta seguro?",
      text: "Esta accion es inrreversible!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Socio eliminado con Exito!", {
            icon: "success",
          });
          deleteSocio(id);
        } else {
          swal("Operacion cancelada con exito!", {
            icon: "success",

          });
        }
      });
  }

  const cambiarEstadoSocio = (id, estado) => {

    if (estado === "false") {
      putSocio(id, true);

    } else {
      putSocio(id, false);
    }

  }


  useEffect(() => {
    recibirData();

  }, [cambiarEstadoSocio, eliminarSocio])


  
  const tableRef= useRef(null);
const generatePDF = useReactToPrint({
  content: ()=> tableRef.current,
  documentTitle:`Datos Socios`

})
  const {onDownload} = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename:"Datos Socio",
    sheet:"Datos Socio",
  });


  return (
    <>
     <Table striped hover size="sm" responsive className='table-dark' ref={tableRef}>
      <thead>
        <tr>
          <th>Nombre y Apellido</th>
          <th>Provincia</th>
          <th>Nacionalidad</th>
          <th>Documento</th>
          <th>Celular</th>
          <th>Email</th>
          <th>Estado</th>
          <th className='column-funciones'>opciones</th>
        </tr>
      </thead>
      <tbody>
        {
          socios.map((index) => (

            <tr key={index.socioid}>
              <th>{index.trabajadornombre}  {index.trabajadorapellido} </th>
              <th>{index.trabajadorprovincia} </th>
              <th>{index.trabajadornacionalidad} </th>
              <th>{index.trabajadordocumento}</th>
              <th>{index.trabajadorcel}</th>
              <th>{index.email}</th>
              <th>{index.estado.toString() === "false" ?
                "Inactivo" : "Activo"
              }</th>
              <th className='d-flex flex-wrap flex-column p-2 column-funciones'>
                <a className='btn bg-cyan text-light fw-bold m-2 column-funciones' href={`/socios/${index.socioid}`}>Ver</a>
                {index.estado.toString() === "false" ?
                  <button className='btn btn-success fw-bold m-2 column-funciones' onClick={() => cambiarEstadoSocio(index.socioid, index.estado.toString())}>Activar</button> :
                  <button className='btn btn-danger fw-bold m-2 column-funciones' onClick={() => cambiarEstadoSocio(index.socioid, index.estado.toString())}>Suspender</button>
                }
              </th>
            </tr>
          ))
        }
      </tbody>
    </Table>
            <div className="container d-flex justify-content-center gap-3 ">
            <button className='btn btn-success fw-bold' onClick={onDownload}>Exportar a Excel <i className="bi bi-file-earmark-spreadsheet"></i></button>
    <button className="btn btn-danger fw-bold" onClick={generatePDF}>Exportar A PDF <i className="bi bi-filetype-pdf"></i></button>
          </div>
    
    
    
    </>
   
  );
}

export default TablasUsuarios;