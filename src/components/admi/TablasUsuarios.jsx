import { deleteSocio, putSocio, putSocioPago, traerSocios } from '@/helpers/fetchAdmi';
import { useEffect, useRef, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useReactToPrint } from 'react-to-print';

function TablasUsuarios() {

  const [socios, setSocios] = useState([]);
  const [estadoPago, setEstadoPago]= useState("");


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

  const cambiarEstadoPago = async  (id) => {  

    const response = await  putSocioPago(id, estadoPago);
        if (response === "Socio Actualizado") {
          swal(response, {
            icon: "success",
          });
         
        } else {
          swal(response, {
            icon: "warning",

          });
        }
      
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

  }, [cambiarEstadoSocio, eliminarSocio, cambiarEstadoPago])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEstadoPago((prevState) => ({ ...prevState, [name]: value }));
  };


  const tableRef = useRef(null);
  const generatePDF = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: `Datos Socios`

  })
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Datos Socio",
    sheet: "Datos Socio",
  });


  return (
    <>
      <Table striped hover size="sm" responsive className='table-dark' ref={tableRef}>
        <thead>
          <tr>
            <th className='text-center text-cyan'>Razon Social</th>
            <th className='text-center text-cyan'>Provincia</th>
            <th className='text-center text-cyan'>Documento</th>
            <th className='text-center text-cyan'>Email</th>
            <th className='text-center text-cyan'>Estado</th>
            <th className='text-center text-cyan'>Estado Aporte</th>         
            <th className='column-funciones text-center text-cyan'>opciones</th>
            <th className='column-funciones text-center text-cyan'>Administrar Pagos</th>
          </tr>
        </thead>
        <tbody>
          {
            socios.map((index) => (

              <tr key={index.socioid}>
                <th className='text-center'>{index.empleadorrazonsocial} </th>
                <th className='text-center'>{index.empleadorprovincia} </th>
                <th className='text-center'>{index.empleadorcuil}</th>
                <th className='text-center'>{index.email}</th>
                <th>{index.estado.toString() === "false" ?
                  "Inactivo" : "Activo"
                }</th>
                <th className='text-center'>{index.estadoPago}</th> 
                
                <th className='d-flex flex-wrap flex-column p-2 column-funciones'>
                  <a className='btn bg-cyan text-light fw-bold m-2 column-funciones' href={`/socios/${index.socioid}`}>Ver</a>
                  {index.estado.toString() === "false" ?
                    <button className='btn btn-success fw-bold m-2 column-funciones' onClick={() => cambiarEstadoSocio(index.socioid, index.estado.toString())}>Activar</button> :
                    <button className='btn btn-danger fw-bold m-2 column-funciones' onClick={() => cambiarEstadoSocio(index.socioid, index.estado.toString())}>Suspender</button>
                  }
               
                </th>
               <th className='column-funciones text-center'>
                     <select id="estadoPago" name="estadoPago" onChange={handleChange} className='text-light bg-dark mb-1'>
                    <option className='text-light'>Seleccione estado:</option>
                    <option value="PAGO" className='text-light'>Pago</option>
                    <option value="DEBE" className='text-light'>Debe</option>
                  </select>
                  <button className='btn btn-success fw-bold mt-2' onClick={()=> cambiarEstadoPago(index.socioid)}>cambiar</button>
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