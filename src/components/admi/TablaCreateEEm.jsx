import { postEmpleados } from '@/helpers/fechSociosAdmi';
import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import swal from 'sweetalert';


const TablaCreateEEm = () => {

  const [empleado, setEmpleado] = useState([{}]);

  

  const crearEmpleado = async () => {
    const response = await postEmpleados(empleado);

    if (response === "Empleado creado con exito!") {
        swal(response, {
            icon: "success",
        });

        location.reload();
    } else {
        swal(response, {
            icon: "warning",

        });
    };
};


    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmpleado((prevState) => ({ ...prevState, [name]: value }));
      };
    
  return (


    <div className='mt-5'>
    <h1 className="text-center text-cyan mt-2 mb-2">Agregar Empleados</h1>

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
              <th><input type="text" onChange={handleChange} name="trabajadornombre" className='bg-dark' id="" /></th>
            </tr>
            
            <tr>
              <th>Apellido</th>
              <th><input type="text" onChange={handleChange} name="trabajadorapellido" className='bg-dark' id="" /></th>
            </tr>
            
            <tr>
              <th>Nacionalidad</th>
              <th> <input type="text" onChange={handleChange} name="trabajadornacionalidad" className='bg-dark' id="" /></th>
            </tr>
          
            <tr>
              <th>Estado civil</th>
              <th> <input type="text" onChange={handleChange} name="trabajadorestadocivil" className='bg-dark' id="" /></th>
            </tr>

            <tr>
              <th>Sexo</th>
              <th> <input type="text" onChange={handleChange} name="trabajadorsexo" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Fecha de Nacimniento</th>
              <th> <input type="text" onChange={handleChange} name="trabajadornacimiento" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>DNI</th>
              <th> <input type="text" onChange={handleChange} name="trabajadordocumento" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>CUIL</th>
              <th> <input type="text" onChange={handleChange} name="trabajadorcuil" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Calle</th>
              <th> <input type="text" onChange={handleChange} name="trabajadordomicilio" className='bg-dark' id="" /></th>
            </tr>

            <tr>
              <th>N°</th>
              <th> <input type="text" onChange={handleChange} name="trabajadornumdomicilio" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Piso</th>
              <th> <input type="text"  onChange={handleChange} name="trabajadorpiso" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Depto</th>
              <th> <input type="text" onChange={handleChange} name="trabajadordepto" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Localidad</th>
              <th> <input type="text" onChange={handleChange} name="trabajadorlocalidad" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Provincia</th>
              <th> <input type="text" onChange={handleChange} name="trabajadorprovincia" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Lugar de Trabajo</th>
              <th> <input type="text" onChange={handleChange} name="trabajadorlugardetrabajo" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Tareas que Realiza</th>
              <th> <input type="text" onChange={handleChange} name="trabajadortareas" className='bg-dark' id="" /></th>
            </tr>

            <tr>
              <th>Telefono</th>
              <th> <input type="text" onChange={handleChange} name="trabajadortel" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Celular</th>
              <th> <input type="text" onChange={handleChange} name="trabajadorcel" className='bg-dark' id="" /></th>
            </tr>
            <tr>
              <th>Sueldo</th>
              <th> <input type="number" onChange={handleChange} name="trabajadorsueldo" className='bg-dark' id="" /></th>
            </tr>
            <th>

            </th>

          </tbody>
          
        </Table>
        <button className='btn  btn-success  fw-bold' onClick={()=> crearEmpleado()}>Agregar</button>
    </div>
  )
}

export default TablaCreateEEm