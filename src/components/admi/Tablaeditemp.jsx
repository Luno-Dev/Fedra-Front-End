import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { putSocioEmp } from '@/helpers/fechSociosAdmi';
import { DataContext } from '../context/DataContext';

const Tablaeditemp = () => {

    const {  show, setShow, edit, setEdit, setEditPublicaciones, editPublicaciones, editEm, setEditem , editEmp, setEditEmp} = useContext(DataContext);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditEmp((prevState) => ({ ...prevState, [name]: value }));
    };

    const editarEmp = async () => {

        const response = await putSocioEmp(editEmp);
 
         if (response === "Empleado Actualizado") {
             swal(response, {
               icon: "success",
             }).then((i) => {
                 setEditem(false);
             });
           } else {
             swal(response, {
               icon: "warning",
   
             });
           };
     };

  return (
    <div className='container'>
        <h1 className="text-cyan text-center mt-5">Editar Empleado</h1>
        <Table hover size="sm" responsive className='table-dark mt-3'>
          <thead className='text-cyan'>
            <tr >
   
        <th></th>
          <th className='text-cyan '>Datos</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Nombre</th>
              <th><input type="text" onChange={handleChange} value={editEmp.trabajadornombre} name="trabajadornombre" className='bg-dark' id="" /></th>
            </tr>
            
            <tr>
              <th>Apellido</th>
              <th><input type="text" onChange={handleChange} value={editEmp.trabajadorapellido} name="trabajadorapellido" className='bg-dark' id="" /></th>
            </tr>
            
            <tr>
              <th>Nacionalidad</th>
              <th> <input type="text" onChange={handleChange} value={editEmp.trabajadornacionalidad} name="trabajadornacionalidad" className='bg-dark' id="" /></th>
            </tr>
          
            <tr>
              <th>Estado civil</th>
              <th> <input type="text" onChange={handleChange} value={editEmp.trabajadorestadocivil} name="trabajadorestadocivil" className='bg-dark' id="" /></th>
            </tr>

            <tr>
              <th>Sexo</th>
              <th> <input type="text" onChange={handleChange} value={editEmp.trabajadorsexo} name="trabajadorsexo" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Fecha de Nacimniento</th>
              <th> <input type="text" onChange={handleChange} value={editEmp.trabajadornacimiento} name="trabajadornacimiento" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>DNI</th>
              <th> <input type="text" onChange={handleChange} value={editEmp.trabajadordocumento} name="trabajadordocumento" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>CUIL</th>
              <th> <input type="text" onChange={handleChange} value={editEmp.trabajadorcuil} name="trabajadorcuil" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Domicilio</th>
              <th> <input type="text" onChange={handleChange} value={editEmp.trabajadordomicilio} name="trabajadordomicilio" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Piso</th>
              <th> <input type="text"  onChange={handleChange} value={editEmp.trabajadorpiso} name="trabajadorpiso" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Depto</th>
              <th> <input type="text" onChange={handleChange} value={editEmp.trabajadordepto} name="trabajadordepto" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Localidad</th>
              <th> <input type="text" onChange={handleChange} value={editEmp.trabajadorlocalidad} name="trabajadorlocalidad" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Provincia</th>
              <th> <input type="text" onChange={handleChange} value={editEmp.trabajadorprovincia} name="trabajadorprovincia" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Lugar de Trabajo</th>
              <th> <input type="text" onChange={handleChange} value={editEmp.trabajadorlugardetrabajo} name="trabajadorlugardetrabajo" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Tareas que Realiza</th>
              <th> <input type="text" onChange={handleChange} value={editEmp.trabajadortareas} name="trabajadortareas" className='bg-dark' id="" /></th>
            </tr>

            <tr>
              <th>Telefono</th>
              <th> <input type="text" onChange={handleChange} value={editEmp.trabajadortel} name="trabajadortel" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Celular</th>
              <th> <input type="text" onChange={handleChange} value={editEmp.trabajadorcel} name="trabajadorcel" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Fecha que Abona</th>
              <th> <input type="text" onChange={handleChange} value={editEmp.fechaAporte} name="fechaAporte" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Sueldo</th>
              <th>$ <input type="number" onChange={handleChange} value={editEmp.trabajadorsueldo} name="trabajadorsueldo" className='bg-dark' id="" /></th>
            </tr>
            <th>

            </th>

          </tbody>
          
        </Table>
        <div className='container w-100 d-flex justify-content-center gap-3'>
        <button className='btn btn-success fw-bold w-25  mb-5' onClick={editarEmp}>Editar</button>
        <button className='btn bg-cyan fw-bold text-light w-25 mb-5' onClick={()=> setEditem(false)}>Volver a Pagar</button>
        </div>
        

    </div>
  )
}

export default Tablaeditemp