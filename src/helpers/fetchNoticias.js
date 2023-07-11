import { traerNoticias } from "./fetchAdmi";

const url = "https://fedra-back-nicolasmoralesdev.vercel.app/api/";



export const getNoticias = async () => {

    let totales = await traerNoticias();
    let param = totales.total - 3;
    console.log(param);
    const response = await fetch(`${url}noticias?limite=3&desde=${param}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();

    return data;
};