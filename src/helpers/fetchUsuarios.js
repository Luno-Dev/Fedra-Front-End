const url = "https://fedra-back-nicolasmoralesdev.vercel.app/api/socios";


export const crearUsuario = async (datos) => {

  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      empleadorcuil: datos.empleadorcuil,
      empleadorrazonsocial: datos.empleadorrazonsocial,
      empleadordomicilio: datos.empleadordomicilio,
      empleadorprovincia: datos.empleadorprovincia,
      empleadortrabajodomicilio: datos.empleadortrabajodomicilio,
      empleadorlocalidad: datos.empleadorlocalidad,
      empleadortrabajoprovincia: datos.empleadortrabajoprovincia,
      empleadortrabajolocalidad: datos.empleadortrabajolocalidad,
      empleadoractividad: datos.empleadoractividad,
      convenio: datos.convenio,
      email: datos.email,
      password: datos.password,
      role: datos.role,
      img: datos.img,

    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data.msg;

};