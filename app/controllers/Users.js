//TODO: Generar el controller de Users.
//const { newUser, otraFuncion, getUserID } = require('../actions');

const { newUser } = require('../actions/userActions');

//Crea el usuario.
const createUser = (req, res) => {
    //TODO: Verificar como hacer la funcion de generación de usuario.

    // Verificar como generar el token a cada usuario en vez de llave,
    //O verificar la opción de llave general y usuario unico mediante el uuid.

    //TODO: Agregar error de createUser
    let usuario = newUser(req);
    console.log("Respuesta", usuario.uuid);
    res.status(200).send(usuario.uuid);
}

module.exports = {
    createUser
}