
const { newUser, getAllUsersData } = require('../actions/userActions');

//Crea el usuario.
const createUser = (req, res) => {
    //TODO: Verificar como hacer la funcion de generación de usuario.

    // Verificar como generar el token a cada usuario en vez de llave,
    //O verificar la opción de llave general y usuario unico mediante el uuid.

    //TODO: Agregar error de createUser
    let usuario = newUser(req);
    console.log("Respuesta: ", usuario.uuid, getTime());

    res.status(200).send(usuario.uuid);
}

const getTime = (a) => {
    var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    return myDate;
}

const getAllUsers = (req, res) => {
    getAllUsersData().then((users) => {
        return res.status(200).json(users);
    }).catch((r) =>{ 
        return res.status(400).json(e);
    })
}

module.exports = {
    createUser,
    getAllUsers
}