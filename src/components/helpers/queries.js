const URL_USUARIO = import.meta.env.VITE_API_USUARIO;
const URL_RECETA = import.meta.env.VITE_API_RECETA;

export const login = async (usuario)=>{
    console.log(usuario);
    try {
        const respuesta = await fetch(URL_USUARIO);
        const listaUsuarios = await respuesta.json();
        console.log(listaUsuarios);
        //buscar usuario
        const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email)
        if (usuarioBuscado) {
            console.log('Email encontrado');
            //verificar el password
            console.log(usuarioBuscado)
            if (usuarioBuscado.contra === usuario.password) {
                console.log("Encontramos el usuario")
                return usuarioBuscado;
            }else{
                console.log("contra incorrecta")
                return null;
            }
        }else{
            console.log("email incorrecto");
            return null;
        }

    } catch (error) {
        console.log(error);
    }

}

export const consultaCrearUsuario = async(usuario)=>{
    try {
        const respuesta = await fetch(URL_USUARIO, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}

export const obtenerRecetas = async()=>{
    try {
        const respuesta = await fetch(URL_RECETA)
        const listaRecetas = await respuesta.json();
        return listaRecetas;
    } catch (error) {
        console.log(error);
    }
}

export const obtenerReceta = async(id)=>{
    try {
        const respuesta = await fetch(`${URL_RECETA}/${id}`)
        const recetaEditar = await respuesta.json();
        return recetaEditar;
    } catch (error) {
        console.log(error);
    }
}

export const consultaBorrarReceta = async(id)=>{
    try {
        const respuesta = await fetch(`${URL_RECETA}/${id}`, {
            method: "DELETE"
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}

export const consultaCrearReceta = async(receta)=>{
    try {
        const respuesta = await fetch(URL_RECETA, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(receta)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}

export const consultaeditarReceta = async(receta, id)=>{
    try {
        const respuesta = await fetch(`${URL_RECETA}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(receta)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}

