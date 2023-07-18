

const url = "https://fedra-back-nicolasmoralesdev.vercel.app/api/";


export const traerSocios = async () => {
    const response = await fetch(`${url}socios`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": JSON.parse(localStorage.getItem('token'))
        },
    });
    const data = await response.json();

    return data;
};


export const getCategorias = async () => {
    const response = await fetch(`${url}categorias`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    });
    const data = await response.json();

    return data.categorias;
};

export const traerSocio = async (id) => {
    const response = await fetch(`${url}socios/${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": JSON.parse(localStorage.getItem('token'))
        },
    });
    const data = await response.json();

    return data.socio;
};

export const traerNoticia = async (id) => {
    const response = await fetch(`${url}noticias/${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    });
    const data = await response.json();
    return data.noticia;
};

export const putSocio = async (id, estado) => {
    const response = await fetch(`${url}socios/${id}`,
        {
            method: "PUT",
            body: JSON.stringify({
                estado: estado,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: JSON.parse(localStorage.getItem("token")),
            },
        }
    );

    const data = await response.json();

    return data;

};



export const deleteSocio = async (id) => {
    const response = await fetch(`${url}socios/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": JSON.parse(localStorage.getItem('token'))
        },
    });
    const data = await response.json();

    return data;
};

export const deleteNoticia = async (id) => {
    const response = await fetch(`${url}noticias/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": JSON.parse(localStorage.getItem('token'))
        },
    });
    const data = await response.json();

    return data;
};

export const traerNoticias = async () => {
    const response = await fetch(`${url}noticias?limite=0`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();

    return data;
};

export const createNoticia = async (noticia) => {
    const response = await fetch(`${url}noticias`,
        {
            method: "POST",
            body: JSON.stringify({
                titulo: noticia.titulo,
                descripcion: noticia.descripcion,
                autor: noticia.autor
              /*   imguno: noticia.imguno,
                subtitulouno: noticia.subtitulouno,
                imgdos: noticia.imgdos,
                subtitulodos: noticia.subtitulodos,
                imgtres: noticia.imgtres,
                subtitulotres: noticia.subtitulotres, */
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": JSON.parse(localStorage.getItem("token")),
            },
        }

    );

    const data = await response.json();
console.log(data);
    return data;
};

export const editNoticia = async (noticia) => {
    const response = await fetch(`${url}noticias/${noticia._id}`,
        {
            method: "PUT",
            body: JSON.stringify({
                img: noticia.img,
                titulo: noticia.titulo,
                descripcion: noticia.descripcion,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: JSON.parse(localStorage.getItem("token")),
            },
        }
    );

    const data = await response.json();
    return data;

};
