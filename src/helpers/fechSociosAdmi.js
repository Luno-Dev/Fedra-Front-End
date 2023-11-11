import axios from "axios";
const xmlbuilder2 = require('xmlbuilder2');

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


   let sueldo = parseInt(empleado.trabajadorsueldo);
   
   try {
    
   } catch (error) {
    
   }
    const response = await fetch(`https://fedra-back-nicolasmoralesdev.vercel.app/api/socios/empleado`, {
        method: "POST",
        body: JSON.stringify({

            trabajadornombre: empleado.trabajadornombre,
            fechaAporte: empleado.fechaAporte,
            trabajadorsueldo: sueldo,
            trabajadorapellido: empleado.trabajadorapellido,
            trabajadornacionalidad: empleado.trabajadornacionalidad,
            trabajadorestadocivil: empleado.trabajadorestadocivil,
            trabajadorsexo: empleado.trabajadorsexo,
            trabajadornacimiento: empleado.trabajadornacimiento,
            trabajadordocumento: empleado.trabajadordocumento,
            trabajadorcuil: empleado.trabajadorcuil,
            trabajadordomicilio: empleado.trabajadordomicilio,
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

    if (data.msg) {
      return data.msg; 
    } else {
      return data.errors[0].msg; 
      
    }  
    
    


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
                fechaAporte: estado.fechaAporte,
                trabajadorapellido: estado.trabajadorapellido,
                trabajadornacionalidad: estado.trabajadornacionalidad,
                trabajadorestadocivil: estado.trabajadorestadocivil,
                trabajadorsexo: estado.trabajadorsexo,
                trabajadornacimiento: estado.trabajadornacimiento,
                trabajadordocumento: estado.trabajadordocumento,
                trabajadorcuil: estado.trabajadorcuil,
                trabajadordomicilio: estado.trabajadordomicilio,
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

    location.reload();
    return data.msg;

};

export const getEmp = async (id)=>{

  const response = await fetch(`https://fedra-back-nicolasmoralesdev.vercel.app/api/socios/empleados/${id}`, {
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
});
const data = await response.json();

return data;

}

export const genearPago = async (monto, id)=>{


  const precio = parseInt(monto);

      const response = await axios.post('https://fedra-pagos-nicolasmoralesdev.vercel.app/create-order', {
            id: id,
            title:"Aportes",
            unit_price: precio,
            currency_id:"ARS",
            quantity:1
      })


     location.replace(response.data.link);  


}



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
    const doc = xmlbuilder2.create();

    doc.ele('soapenv:Envelope', {
        'xmlns:soapenv': 'http://schemas.xmlsoap.org/soap/envelope/',
        'xmlns:alt': 'http://altadeuda.service.ws.linkpagos.redlink.com.ar/',
        'xmlns:req': 'http://request.ws.linkpagoservices.redlink.com.ar/',
        'xmlns:req1': 'http://request.ws.altadeuda.linkpagoservices.redlink.com.ar/'
    })
        .ele('soapenv:Header')
        .ele('wsse:Security', {
            'xmlns:wsse': 'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd',
            'xmlns:wsu': 'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd'
        })
        .ele('wsse:UsernameToken', {
            'wsu:Id': 'UsernameToken-E83F21CFAA25B3F57E16001991722261'
        })
        .ele('wsse:Username', 'PAGOSSERVICES_GOV')
        .ele('wsse:Password', {
            'Type': 'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText'
        }, 'qb-*XEia')
        .end();

        const soapHeaderString = doc.end({ prettyPrint: true });

// URL del servicio SOAP
const serviceUrl = 'https://altadeudalinea.h.redlink.com.ar/linkpagosservices/AltaDeudasServices?wsdl';

// Datos del cuerpo del mensaje SOAP
const soapBody = `  <soapenv:Body>
<alt:altaDeDeudas>
    <requerimientoAltaDeDeudas>
        <req:cabecera>
            <idRequerimiento>PRUEBAFEDRA2023</idRequerimiento>
            <ipCliente>104.252.155.233</ipCliente>
            <timeStamp>20230914175435763</timeStamp>
            <idEntidad>GOV</idEntidad>
            <canal>internet</canal>
        </req:cabecera>
        <req1:ente>GOV</req1:ente>
        <req1:usuario>56785323</req1:usuario>
        <datosDeuda>
            <deuda>
                <idDeuda>68359</idDeuda>
                <concepto>001</concepto>
                <vencimientos>
                    <vencimiento>
                        <ordenVencimiento>1</ordenVencimiento>
                        <fechaVencimiento>230928</fechaVencimiento>
                        <importe>000000011540</importe>
                    </vencimiento>
                </vencimientos>
                <discrecional>LINK</discrecional>
            </deuda>
        </datosDeuda>
    </requerimientoAltaDeDeudas>
</alt:altaDeDeudas>
</soapenv:Body>`;

// Construir la solicitud SOAP completa
const soapRequest = `${soapHeaderString}${soapBody}`;

// Configuración de la solicitud HTTP
const axiosConfig = {
  headers: {
    'Content-Type': 'text/xml;charset=UTF-8',
    'SOAPAction': 'alt', // Reemplaza con el valor correcto
  },
};

// Realizar la solicitud SOAP
axios
  .post(serviceUrl, soapRequest, axiosConfig)
  .then((response) => {
    // Manejar la respuesta del servicio SOAP aquí
    console.log(response.data);
  })
  .catch((error) => {
    // Manejar errores aquí
    console.error(error);
  });
 
/* 
  const soapHeader = xmlbuilder2.create({
    'soapenv:Envelope': {
      '@xmlns:req': 'http://request.ws.financieroservices.redlink.com.ar/',
      '@xmlns:ser': 'http://service.ws.financieroservices.sam.redlink.com.ar/',
      '@xmlns:soapenv': 'http://schemas.xmlsoap.org/soap/envelope/'
    }
  })
    .ele('soapenv:Header')
      .ele('wsse:Security', {
        'xmlns:wsse': 'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd',
        'xmlns:wsu': 'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd'
      })
        .ele('wsse:UsernameToken', {
          'wsu:Id': 'UsernameToken-E83F21CFAA25B3F57E16001991722261'
        })
          .ele('wsse:Username', 'PAGOSSERVICES_GOV')
          .up()
          .ele('wsse:Password', {
            'Type': 'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText'
          }, 'qb-*XEia');
  
  const soapHeaderString = soapHeader.end({ prettyPrint: true });
  
  // URL del servicio SOAP
  const serviceUrl = 'https://altadeudalinea.h.redlink.com.ar/linkpagosservices/AltaDeudasServices?wsdl';
  
  // Datos del cuerpo del mensaje SOAP
  const soapBody = `<soapenv:Body>
  <alt:altaDeDeudas>
      <requerimientoAltaDeDeudas>
          <req:cabecera>
              <idRequerimiento>PRUEBAFEDRA2023</idRequerimiento>
              <ipCliente>104.252.155.233</ipCliente>
              <timeStamp>20230914175435763</timeStamp>
              <idEntidad>GOV</idEntidad>
              <canal>internet</canal>
          </req:cabecera>
          <req1:ente>GOV</req1:ente>
          <req1:usuario>56785323</req1:usuario>
          <datosDeuda>
              <deuda>
                  <idDeuda>68359</idDeuda>
                  <concepto>001</concepto>
                  <vencimientos>
                      <vencimiento>
                          <ordenVencimiento>1</ordenVencimiento>
                          <fechaVencimiento>230928</fechaVencimiento>
                          <importe>000000011540</importe>
                      </vencimiento>
                  </vencimientos>
                  <discrecional>LINK</discrecional>
              </deuda>
          </datosDeuda>
      </requerimientoAltaDeDeudas>
  </alt:altaDeDeudas>
</soapenv:Body>`;
  
  // Construir la solicitud SOAP completa
  const soapRequest = `${soapHeaderString}${soapBody}`;
  
  // Configuración de la solicitud HTTP
  const axiosConfig = {
    headers: {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'altaDeDeudas', // Reemplaza con el valor correcto
    },
  };
  
  // Realizar la solicitud SOAP
  axios
    .post(serviceUrl, soapRequest, axiosConfig)
    .then((response) => {
      // Manejar la respuesta del servicio SOAP aquí
      console.log(response.data);
    })
    .catch((error) => {
      // Manejar errores aquí
      console.error(error);
    });

 */





}  