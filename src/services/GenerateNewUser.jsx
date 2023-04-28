
const GenerateNewUser = ({
    nombreApellido = "",
    mail = "",
    contrasena = "",
    favoritos = [],
    carrito = []
}) => {
    return {
        nombreApellido: nombreApellido,
        mail: mail,
        contrasena: contrasena,
        favoritos: favoritos,
        carrito: carrito

    }
}


export default GenerateNewUser