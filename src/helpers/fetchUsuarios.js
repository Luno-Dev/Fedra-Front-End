const url = "https://fedra-back-nicolasmoralesdev.vercel.app/api/socios";


export const crearUsuario = async (datos) => {

  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();
  return data;
  
};