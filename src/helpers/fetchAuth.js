

const url = "https://fedra-back-nicolasmoralesdev.vercel.app/api/auth/loginAdmin";

export const usuarios = { usuario: "" };
export const socios = { usuario: "" };



export const login = async (datos) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  usuarios.usuario = data.usuario;

  return data;
};

export const loginSocios = async (datos) => {
  const response = await fetch("https://fedra-back-nicolasmoralesdev.vercel.app/api/sauth/loginsocio", {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  socios.socio = data.socio;
  return data;
};