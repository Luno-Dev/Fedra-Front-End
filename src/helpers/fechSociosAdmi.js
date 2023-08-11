
const url = "https://fedra-back-nicolasmoralesdev.vercel.app/api/";


export const deleteEmpleadoSocio = async (id) => {
    const response = await fetch(`${url}socios/empleado/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": JSON.parse(localStorage.getItem('token'))
        },
    });
    const data = await response.json();
    location.reload();
    return data;
};

export const postEmpleados = async (empleado) => {
    const response = await fetch(`${url}socios/empleado`, {
        method: "POST",
        body: JSON.stringify({
        
            trabajadornombre: empleado.trabajadornombre,
            trabajadorsueldo: empleado.trabajadorsueldo,
            trabajadorapellido: empleado.trabajadorapellido,
            trabajadornacionalidad: empleado.trabajadornacionalidad,
            trabajadorestadocivil: empleado.trabajadorestadocivil,
            trabajadorsexo: empleado.trabajadorsexo,
            trabajadornacimiento: empleado.trabajadornacimiento,
            trabajadordocumento: empleado.trabajadordocumento,
            trabajadorcuil: empleado.trabajadorcuil,
            trabajadordomicilio: empleado.trabajadordomicilio,
            trabajadornumdomicilio: empleado.trabajadornumdomicilio,
            trabajadorpiso: empleado.trabajadorpiso,
            trabajadordepto: empleado.trabajadordepto,
            trabajadorlocalidad: empleado.trabajadorlocalidad,
            trabajadorprovincia: empleado.trabajadorprovincia,
            trabajadorlugardetrabajo: empleado.trabajadorlugardetrabajo,
            trabajadortareas: empleado.trabajadortareas,
            trabajadortel: empleado.trabajadortel,
            trabajadorcel: empleado.trabajadorcel,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "empleador": JSON.parse(localStorage.getItem("id")),
        },
    });
    const data = await response.json();   
    return data.msg;
    

};


export const putSocio = async (id, estado) => {
    const response = await fetch(`${url}socios/${id}`,
        {
            method: "PUT",
            body: JSON.stringify({
                estadoPago: estado,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: JSON.parse(localStorage.getItem("token")),
            },
        }
    );

    const data = await response.json();

    return data.msg;

};

