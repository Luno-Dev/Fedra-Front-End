
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

export const putSocioEmp = async (estado) => {

    const response = await fetch(`${url}socios/empleado/${estado.eId}`,
        {
            method: "PUT",
            body: JSON.stringify({
                trabajadorsueldo: estado.trabajadorsueldo,
                trabajadornombre: estado.trabajadornombre,
                trabajadorapellido: estado.trabajadorapellido,
                trabajadornacionalidad: estado.trabajadornacionalidad,
                trabajadorestadocivil: estado.trabajadorestadocivil,
                trabajadorsexo: estado.trabajadorsexo,
                trabajadornacimiento: estado.trabajadornacimiento,
                trabajadordocumento: estado.trabajadordocumento,
                trabajadorcuil: estado.trabajadorcuil,
                trabajadordomicilio: estado.trabajadordomicilio,
                trabajadornumdomicilio: estado.trabajadornumdomicilio,
                trabajadorpiso: estado.trabajadorpiso,
                trabajadordepto: estado.trabajadordepto,
                trabajadorlocalidad: estado.trabajadorlocalidad,
                trabajadorprovincia: estado.trabajadorprovincia,
                trabajadorlugardetrabajo: estado.trabajadorlugardetrabajo,
                trabajadortareas: estado.trabajadortareas,
                trabajadortel: estado.trabajadortel,
                trabajadorcel: estado.trabajadorcel
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




export const crearDeuda = async (user, importe) => {

    const idDeuda = Date.now();
    const fecha = new Date();
    const year = fecha.getFullYear();
    const mes = fecha.getMonth();
    const dia = fecha.getDay();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    const milisegundos = fecha.getMilliseconds();

    let userId = user.split("-");

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://altadeudalinea.h.redlink.com.ar/linkpagosservices/AltaDeudasServices?wsdl');

    
    xhr.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
    xhr.setRequestHeader('WSS-Password-Type', 'PasswordText');
    xhr.setRequestHeader('Username', 'PAGOSSERVICES_GOV');
    xhr.setRequestHeader('Password', 'qb-*XEia');

    const request = ` 
    <?xml version="1.0" encoding="UTF-8"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:alt="http://altadeuda.service.ws.linkpagos.redlink.com.ar/" xmlns:req="http://request.ws.linkpagoservices.redlink.com.ar/" xmlns:req1="http://request.ws.altadeuda.linkpagoservices.redlink.com.ar/">
    <soapenv:Header/>
    <soapenv:Body>
       <alt:altaDeDeudas>
          <requerimientoAltaDeDeudas>
             <req:cabecera>
                <idRequerimiento>FEDRA</idRequerimiento>
                <ipCliente>104.252.155.233</ipCliente>
                <timeStamp>${year}${mes}${dia}${hora}${minutos}${segundos}${milisegundos}</timeStamp>
                <idEntidad>GOV</idEntidad>
                <canal>internet</canal>
             </req:cabecera>
             <req1:ente>GOV</req1:ente>
             <req1:usuario>${userId[1]}</req1:usuario>
             <datosDeuda>
                <deuda>
                   <idDeuda>${idDeuda}</idDeuda>
                   <concepto>001</concepto>
                   <vencimientos>
                      <vencimiento>
                         <ordenVencimiento>1</ordenVencimiento>
                         <fechaVencimiento>${dia}${mes}${year}</fechaVencimiento>
                         <importe>0000000${importe}</importe>
                      </vencimiento>
                   </vencimientos>
                   <discrecional>LINK</discrecional>
                </deuda>
             </datosDeuda>
          </requerimientoAltaDeDeudas>
       </alt:altaDeDeudas>
    </soapenv:Body>
 </soapenv:Envelope>`;

try {
     xhr.send(request);
} catch (error) {
    console.log(error);
}

   

    xhr.onload = () => {
        const response = xhr.responseText;
       
        console.log(response);
      }; 

} 